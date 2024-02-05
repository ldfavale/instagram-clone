import { View, Text } from 'react-native'
import React from 'react'
import { IComment } from '../types/models'



interface IFeedComment {
  comment: IComment
}

const Comment = ({ comment }: IFeedComment) => {
  return (
    <View className="px-3 mb-1">
      <Text><Text className="font-bold">{comment.user.username}</Text> {comment.comment} </Text>
    </View >
  )
}

export default Comment
