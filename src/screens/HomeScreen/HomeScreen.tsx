import React, { useRef, useState } from 'react'
import FeedPost from '../../components/FeedPost';
import { FlatList, ViewToken } from 'react-native';
import { useQuery} from '@apollo/client'
import { listPosts } from './queries';
import { ListPostsQuery, ListPostsQueryVariables } from '../../API.ts'
import ApiErrorMessage from '../../components/apiErrorMessage';
import Loading from '../../components/Loading.tsx';

export default function HomeScreen() {

  const [activePost, setActivePostId] = useState<string | null>(null);
  const {data, loading, error} = useQuery<ListPostsQuery,ListPostsQueryVariables>(listPosts);
  
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  }
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id || 0)
      }
    })
    
    if(loading){
      return <Loading/>;
    }
    
    if(error){
      return <ApiErrorMessage 
        title='Error fetching posts' 
        message={error.message}
        onRetry={()=>{}}
      />;
    }
    
    const posts = data?.listPosts?.items;
    

  return (
     <FlatList
        data={posts}
        renderItem={({ item }) => item && <FeedPost key={item.id} post={item} isVisible={item.id === activePost} />}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
  );
}
