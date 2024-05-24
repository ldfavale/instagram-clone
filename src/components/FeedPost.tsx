import React, { useState } from 'react'
import { Alert, Image, Text, View } from 'react-native'
import { AntDesign, Ionicons,Feather } from '@expo/vector-icons';
import Comment from './FeedComment';
import colors from '../theme/colors';
import DoublePressable from './DoublePressable';
import Carousel from './Carousel';
import VideoPlayer from './VideoPlayer';
import { useNavigation } from '@react-navigation/native';
import { FeedNavigationProp } from '../navigation/types';
import {  Post } from '../API'
import PostMenu from './PostMenu';
import default_user_image from '../assets/images/default_user.jpg'
import useLikeService from '../services/LikeService/LikeService';
import usePostService from '../services/PostService/PostService';


interface IFeedPost {
  post: Post,
  isVisible: boolean
}


function FeedPost({ post, isVisible }: IFeedPost) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const toggleDescriptionExpanded = () => setIsDescriptionExpanded(v => !v)
  const navigation = useNavigation<FeedNavigationProp>()
  const { toggleLike, isLiked, postLikes } = useLikeService(post)
  const { isMyPost, submitPostDeletion } = usePostService(post)


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

  const navigateToLikesPage = ()=>{
    navigation.navigate('PostLikes',{id: post.id})
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
  const profile_image = post.User?.image ? { uri: post.User?.image} :  default_user_image;

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
            name={isLiked ? 'heart' : 'hearto'}
            size={24}
            onPress={toggleLike}
            style={{ color: isLiked ? colors.accent : colors.black }}
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
        {postLikes.length > 0 &&
          <Text>Les gusta a <Text className="font-bold">{ postLikes[0]?.User?.username }</Text> 
            {postLikes.length > 1 && 
            <Text> y a<Text className="font-bold" onPress={navigateToLikesPage} > {postLikes.length - 1} personas mas</Text></Text>
            }
          </Text>
        }
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
