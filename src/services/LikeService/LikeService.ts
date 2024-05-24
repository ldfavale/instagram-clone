import { useMutation, useQuery } from "@apollo/client"
import { CreateLikeMutation, CreateLikeMutationVariables, DeleteLikeMutation, DeleteLikeMutationVariables, LikesForPostByUserQuery, LikesForPostByUserQueryVariables, Post, UpdatePostMutation, UpdatePostMutationVariables } from "../../API"
import { createLike, deleteLike, likesForPostByUser, updatePost } from "./queries"
import { useAuthenticator } from "@aws-amplify/ui-react-native"
import { AuthUser } from "aws-amplify/auth";

const userSelector = (context: { user: AuthUser; }) => [context.user];

const useLikeService = (post: Post) => {
    const {user} = useAuthenticator(userSelector)
    const [doUpdatePost] = useMutation<UpdatePostMutation,UpdatePostMutationVariables>(updatePost,{variables: {input: { id: post.id }}, refetchQueries: ["listPosts"]})
    const [doCreateLike] = useMutation<CreateLikeMutation,CreateLikeMutationVariables>(createLike,{variables: {input: { postID: post.id, userID: user.userId }}, refetchQueries: ["LikesForPostByUser"]})
    const [doDeleteLike] = useMutation<DeleteLikeMutation,DeleteLikeMutationVariables>(deleteLike,{ refetchQueries: ["LikesForPostByUser"]})
    const {data:usersLikesData} = useQuery<LikesForPostByUserQuery,LikesForPostByUserQueryVariables>(likesForPostByUser,{variables: { postID: post.id, userID: { eq: user.userId}}})
    const {data:postLikesData} = useQuery<LikesForPostByUserQuery,LikesForPostByUserQueryVariables>(likesForPostByUser,{variables: { postID: post.id}})
    const postLikes = postLikesData?.likesForPostByUser?.items || [] 
    const userLikes = usersLikesData?.likesForPostByUser?.items || [] 
    const userLike = userLikes?.[0] 


    const incrementNofLikes = (amount: 1 | -1) =>{
        try {
          doUpdatePost({
            variables: {
              input: {
                id: post.id,
                nofLikes: post.nofLikes + amount
              }
            }
          })
        } catch (error) {
          console.log(error)
        }
      }

      const addLike = () => {
        doCreateLike();
        incrementNofLikes(1)
      }
      const removeLike = () => {
        if(!userLike){return}
        doDeleteLike({variables: {input: { id: userLike.id }}});
        incrementNofLikes(-1)
      }

      const toggleLike = () => {
        try {
          if(userLike){
            removeLike()
          }else{
            addLike()
          }
        } catch (e) {
          console.log((e as Error).message)
        }
        
      }
    
      return {
        toggleLike,
        isLiked: !!userLike,
        postLikes
      }
}

export default useLikeService;