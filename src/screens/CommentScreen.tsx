import React from 'react'
import { View, Text, FlatList, TextInput } from 'react-native'
import comments from '../assets/data/comments.json'
import Comment from '../components/Comment'
import Input from '../components/Input'

const CommentScreen = () => {
  return (
    <>
      <View className="flex pt-4 flex-1">
        <FlatList
          data={comments}
          renderItem={({ item }) => <Comment comment={item} includeDetails />}

          />
      </View>
      <Input  />
    </>
  )
}

export default CommentScreen
