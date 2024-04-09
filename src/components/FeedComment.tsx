import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import colors from '../theme/colors';
import { Comment } from '../API';


interface IFeedComment {
  comment: Comment,
  includeDetails?: boolean
}

const FeedComment = ({ comment, includeDetails = false }: IFeedComment) => {

  const [liked, setLiked] = useState(false)
  const toggleLike = () => setLiked(v => !v)

  return (
    <View className="flex flex-row px-3 pb-1 space-x-3 ">
      {includeDetails &&
        <Image source={{ uri: comment.User?.image }} className="h-10 w-10 rounded-full" />
      }

      <View className="flex-1">
        <Text><Text className="font-bold">{comment.User?.username}</Text> {comment.comment} </Text>
        {includeDetails &&
        <View className="flex-row space-x-3 ">
          <Text className="text-gray-500">2d</Text>
          <Text className="text-gray-500">5 Likes</Text>
          <Text className="text-gray-500">reply</Text>
        </View>
        }
      </View >
      <View className="m-1">
        <Pressable onPress={toggleLike} hitSlop={15}>
          <AntDesign
            name={liked ? 'heart' : 'hearto'}
            size={14}
            style={{ color: liked ? colors.accent : colors.black }}
          />
        </Pressable>
      </View >
    </View>
  )
}

export default FeedComment
