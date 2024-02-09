import React, { useRef, useState } from 'react'
import posts from '../assets/data/posts.json';
import Post from '../components/Post';
import { FlatList, ViewToken } from 'react-native';

export default function HomeScreen() {


  const [activePost, setActivePostId] = useState<string | null>(null);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  }
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id || 0)
      }
    })

  return (
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post key={item.id} post={item} isVisible={item.id === activePost} />}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
  );
}
