import { View, Text, FlatList, Image, useWindowDimensions, ViewToken } from 'react-native'
import React, { ReactNode, useRef, useState } from 'react'
import colors from '../theme/colors'
import DoublePressable from './DoublePressable'

interface ICarousel {
  images: string[] ,
  onDoublePress?: () => void,
  full?: boolean,
  rounded?: boolean,
  dots?:boolean

}
const Carousel = ({ images, onDoublePress = () => { }, full=true, rounded=false, dots=true}: ICarousel) => {

  const { width:windowWidth } = useWindowDimensions();
  const width = full ? windowWidth : windowWidth * 0.70
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

    const className = [
      'aspect-square',
      rounded && "rounded"
    ].filter(v=>v).join(" ")
    

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item, index }) =>
        <View className={`${full ? "" : "pr-4"}`}>
          <DoublePressable onDoublePress={onDoublePress} >
            <Image source={{ uri: item }} style={{ width }} className={className} />
          </DoublePressable>
        </View>
        }
        horizontal
        pagingEnabled
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
        keyExtractor={(item)=> item}
      />
      {dots && <View className=" flex flex-row justify-center space-x-2 absolute bottom-0 pb-2 w-full">
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
      </View>}
    </View>
  )
}

export default
  Carousel
