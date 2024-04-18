import React, { useState } from 'react'
import { Alert, Image, Text, View } from 'react-native'
import { Entypo,AntDesign, Ionicons,Feather } from '@expo/vector-icons';
import Comment from './FeedComment';
import colors from '../theme/colors';
import DoublePressable from './DoublePressable';
import Carousel from './Carousel';
import VideoPlayer from './VideoPlayer';
import { useNavigation } from '@react-navigation/native';
import { FeedNavigationProp } from '../navigation/types';
import { DeletePostMutation, DeletePostMutationVariables, Post } from '../API'
import placeholder from '../assets/leo_profile.png'
import { useMutation } from '@apollo/client';
import { deletePost } from './queries';
import { AuthUser } from 'aws-amplify/auth';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import PostMenu from './PostMenu';

interface IFeedPost {
  post: Post,
  isVisible: boolean,
  refetch: () => {}
}

const userSelector = (context: { user: AuthUser; }) => [context.user];


function FeedPost({ post, isVisible, refetch }: IFeedPost) {
  const [postLiked, setPostLiked] = useState(false)
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const toggleLike = () => setPostLiked(v => !v)
  const toggleDescriptionExpanded = () => setIsDescriptionExpanded(v => !v)
  const navigation = useNavigation<FeedNavigationProp>()
  const {user} = useAuthenticator(userSelector)
  const [doDeletePost] = useMutation<DeletePostMutation,DeletePostMutationVariables>(deletePost,{variables: {input: { id: post.id }}})
  const isMyPost = post.userID === user.userId;
  
  
  const navigateToUser = () => {
    if(post.User?.id){
      navigation.navigate('UserProfile', {userId: post.User?.id})
    }
  }
  const onDeleteButtonPressed = () => {
    Alert.alert("Are you sure?", "Deleting a Post is permanent", [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: submitPostDeletion,
      }
    ])
  }
  const onEditButtonPressed = () => {
    navigation.navigate("EditPost", {postId: post.id});
  }

  const submitPostDeletion = async () => {
    if(isMyPost){
      try {
        const response = await doDeletePost();
        console.log(response)
        refetch()

      } catch (e) {
        console.log("ERROR:",(e as Error).message);
      }
    }
  }

  const getPostContent = () => {
    if (post.image)
      return (
        <DoublePressable onDoublePress={toggleLike}>
          <Image
            source={{ uri: post.image }}
            className="w-full aspect-square"
          />
        </DoublePressable>
      )
    else if (post.images && post.images.length)
      return <Carousel images={post.images} onDoublePress={toggleLike} />
    else if (post.video)
      return <VideoPlayer uri={post.video} shouldPlay={isVisible} />
  }

  const content = getPostContent()
  const profile_image = post.User?.image ? { uri: post.User?.image} : placeholder;

  return (
    <>
      <View className="flex mb-6">

        {/* Header*/}
        <View className=" flex flex-row items-center space-x-4 p-3 ">
          <Image
            source={profile_image}
            className="w-10 aspect-square rounded-full"
          />
          <Text className=" font-bold flex-1 text-lg" onPress={navigateToUser}>{post.User?.username || post.User?.name}</Text>
            <PostMenu  
            isMyPost={isMyPost}
            onDeleteButtonPressed={onDeleteButtonPressed} 
            onEditButtonPressed={onEditButtonPressed} 
            />
        </View>

        {/* Body*/}
        <View className=" w-full bg-slate-400 ">
          {content}
        </View>
        {/* Footer*/}
        <View className=" flex flex-row p-3 space-x-2 ">
          <AntDesign
            name={postLiked ? 'heart' : 'hearto'}
            size={24}
            onPress={toggleLike}
            style={{ color: postLiked ? colors.accent : colors.black }}
          />

          <Ionicons
            name="chatbubble-outline"
            size={24}


          />
          <Feather
            name="send"
            size={24}

          />
          <View className="flex-1  items-end">
            <Feather
              name="bookmark"
              size={24}
            />
          </View>
        </View>
        {/* Who likes*/}
        <View className="px-3 mb-2">
          <Text>Les gusta a <Text className="font-bold">ldfavale</Text> y a <Text className="font-bold">{post.nofLikes - 1} personas mas</Text></Text>
        </View>
        <View className="px-3 mb-1">
          <Text numberOfLines={isDescriptionExpanded ? 0 : 3}><Text className="font-bold">{post.User?.username}</Text> {post.description}</Text>
          <Text className="text-gray-500" onPress={toggleDescriptionExpanded}>{isDescriptionExpanded ? "Ver Menos" : "Ver más"}</Text>
        </View >
        {(post.Comments?.items || []).map((comment) => {
          return comment && <Comment comment={comment}  key={comment?.id} />
        })}
        <View className="px-3 mb-[2px]">
          <Text className="text-sm text-gray-500">Ver los {post.nofComments} comentarios</Text>
        </View >
        <View className="px-3 ">
          <Text className="text-xs"><Text className="text-gray-500">{post.createdAt}</Text> <Text className="font-bold">Ver traducción</Text></Text>
        </View >
      </View>
    </>
  )
}

export default FeedPost
