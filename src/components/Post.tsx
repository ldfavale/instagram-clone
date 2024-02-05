import React from 'react'
import { Image, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { IPost } from '../types/models'
import Comment from './Comment';

interface IFeedPost {
  post:IPost
}


function Post({ post }:IFeedPost) {
  return (
    <>
      <View className="flex mb-6">

        {/* Header*/}
        <View className=" flex flex-row items-center space-x-4 p-3 ">
          <Image
            source={{ uri: post.user.image }}
            className="w-10 aspect-square rounded-full"
          />
          <Text className=" font-bold flex-1 text-lg" >{post.user.username}</Text>
          <Entypo name="dots-three-horizontal" size={20} color="gray" />
        </View>

        {/* Body*/}
        <View className=" w-full bg-slate-400 ">
          <Image
            source={{ uri: post.image }}
            className="w-full aspect-square"
          />
        </View>
        {/* Footer*/}
        <View className=" flex flex-row p-3 space-x-2 ">
          <AntDesign
            name={'hearto'}
            size={24}

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
          <Text>Les gusta a <Text className="font-bold">ldfavale</Text> y a <Text className="font-bold">{post.nofLikes -1} personas mas</Text></Text>
        </View>
        <View className="px-3 mb-1">
          <Text><Text className="font-bold">{post.user.username}</Text> {post.description}</Text>
        </View >
        {post.comments.map((comment)=>{
          return <Comment comment={comment} user={post.user}/>
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
