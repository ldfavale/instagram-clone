import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import colors from '../theme/colors'

const Input = () => {

  const [newComment, setNewComment] = useState('')

  const onPost = () => {
    console.warn(newComment)
    setNewComment('')
  }
  return (
    <View className="p-4 flex-row space-x-4 items-end">
      <Image
        className="h-10 w-10 rounded-full"
        source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg" }}
      />
      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        placeholder='Write your comment...'
        className=" flex-1 border rounded-[25px] p-1 pl-5 pr-16 "
        style={{ borderColor: colors.border }}
        multiline
      />
      <Pressable
        onPress={onPost}
        className="flex items-center justify-center absolute right-0 bottom-0 mr-8 mb-[26px]   ">
        <Text
          className="font-bold uppercase"
          style={{ color: colors.primary }}
        >Post</Text>
      </Pressable>
    </View>
  )
}

export default Input
