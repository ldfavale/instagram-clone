import React from 'react'
import { View, Image, FlatList } from 'react-native'
import { Post } from '../API'

interface IFeedGridView {
  data: (Post | null)[] | undefined,
  listHeaderComponent?: React.ComponentType<any> | React.ReactElement | null | undefined;

}

const FeedGridView = ({ data, listHeaderComponent }: IFeedGridView) => {
  return (
    <View className="">
      <FlatList
        data={data}
        renderItem={({ item }) => <View className="p-[1] max-w-[33.33%] flex-1  "><Image source={{ uri: item?.image || item?.images?.[0] }} className='aspect-square' /></View>}
        numColumns={3}
        className=""
        ListHeaderComponent={listHeaderComponent}
      />
    </View>
  )
}

export default FeedGridView
