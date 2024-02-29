import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { IPost } from '../types/models'
import Comment from './Comment';
import colors from '../theme/colors';
import DoublePressable from './DoublePressable';
import Carousel from './Carousel';
import VideoPlayer from './VideoPlayer';
import { useNavigation } from '@react-navigation/native';

interface IFeedPost {
  post: IPost,
  isVisible: boolean
}



function Post({ post, isVisible }: IFeedPost) {
  const [postLiked, setPostLiked] = useState(false)
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const toggleLike = () => setPostLiked(v => !v)
  const toggleDescriptionExpanded = () => setIsDescriptionExpanded(v => !v)
  const navigation = useNavigation()

  const navigateToUser = () => {
    navigation.navigate('Profile', {userId: post.user})
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
    else if (post.images)
      return <Carousel images={post.images} onDoublePress={toggleLike} />
    else if (post.video)
      return <VideoPlayer uri={post.video} shouldPlay={isVisible} />
  }

  const content = getPostContent()


  return (
    <>
      <View className="flex mb-6">

        {/* Header*/}
        <View className=" flex flex-row items-center space-x-4 p-3 ">
          <Image
            source={{ uri: post.user.image }}
            className="w-10 aspect-square rounded-full"
          />
          <Text className=" font-bold flex-1 text-lg" onPress={navigateToUser}>{post.user.username}</Text>
          <Entypo name="dots-three-horizontal" size={20} color="gray" />
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
          <Text numberOfLines={isDescriptionExpanded ? 0 : 3}><Text className="font-bold">{post.user.username}</Text> {post.description}</Text>
          <Text className="text-gray-500" onPress={toggleDescriptionExpanded}>{isDescriptionExpanded ? "Ver Menos" : "Ver más"}</Text>
        </View >
        {post.comments.map((comment) => {
          return <Comment comment={comment} user={post.user} key={comment.id} />
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

export default Post
