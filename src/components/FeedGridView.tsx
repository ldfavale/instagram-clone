import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import user from '../assets/data/user.json'
import ProfileHeader from '../components/ProfileHeader'
import { IPost } from '../types/models'

interface IFeedGridView {
  data: IPost[],
  listHeaderComponent?: React.ComponentType<any> | React.ReactElement | null | undefined;

}

const FeedGridView = ({ data, listHeaderComponent }: IFeedGridView) => {
  return (
    <View className="">
      <FlatList
        data={data}
        renderItem={({ item }) => <View className="p-[1] max-w-[33.33%] flex-1  "><Image source={{ uri: item.image || item.images[0] }} className='aspect-square' /></View>}
        numColumns={3}
        className=""
        ListHeaderComponent={listHeaderComponent}
      />
    </View>
  )
}

export default FeedGridView
