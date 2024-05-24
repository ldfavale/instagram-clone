import { useMutation } from "@apollo/client"
import { DeletePostMutation, DeletePostMutationVariables, Post, UpdatePostMutation, UpdatePostMutationVariables } from "../../API"
import { deletePost, updatePost } from "./queries"
import { useAuthenticator } from "@aws-amplify/ui-react-native"
import { AuthUser } from "aws-amplify/auth";

const userSelector = (context: { user: AuthUser; }) => [context.user];


const usePostService = (post: Post) => {
    const {user} = useAuthenticator(userSelector)
    const [doUpdatePost,{data:dataUpdatePost}] = useMutation<UpdatePostMutation,UpdatePostMutationVariables>(updatePost,{variables: {input: { id: post.id }}, refetchQueries: ["listPosts"]})    
    const [doDeletePost] = useMutation<DeletePostMutation,DeletePostMutationVariables>(deletePost,{variables: {input: { id: post.id }}, refetchQueries: ["listPosts"]})
    const isMyPost = post.userID === user.userId;

    const submitPostDeletion = async () => {
      if(isMyPost){
        try {
          const response = await doDeletePost();
          console.log(response)
        } catch (e) {
          console.log("ERROR:",(e as Error).message);
        }
      }
    }

      return {
        isMyPost,
        submitPostDeletion
      }
}

export default usePostService;