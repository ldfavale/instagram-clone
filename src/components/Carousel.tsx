import { View, Text, FlatList, Image, useWindowDimensions, ViewToken } from 'react-native'
import React, { ReactNode, useRef, useState } from 'react'
import colors from '../theme/colors'
import DoublePressable from './DoublePressable'

interface ICarousel {
  images: string[] ,
  onDoublePress?: () => void

}
const Carousel = ({ images, onDoublePress = () => { } }: ICarousel) => {

  const { width } = useWindowDimensions()
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  }
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0)
      }
    })



  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item, index }) =>
          <DoublePressable onDoublePress={onDoublePress}>
            <Image source={{ uri: item }} style={{ width }} className="aspect-square" />
          </DoublePressable>
        }
        horizontal
        pagingEnabled
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
        keyExtractor={(item)=> item}
      />
      <View className=" flex flex-row justify-center space-x-2 absolute bottom-0 pb-2 w-full">
        {images?.map((_, i) => (
          <View
            className="h-2 w-2 m-1 rounded-full"
            key={i}
            style={{
              backgroundColor:
                activeImageIndex == i ?
                  colors.primary : colors.white
            }}>
          </View>))}
      </View>
    </View>
  )
}

export default
  Carousel
