import React, { useRef, useState } from 'react'
import FeedPost from '../../components/FeedPost';
import { FlatList, ViewToken } from 'react-native';
import { useQuery} from '@apollo/client'
import { listPosts } from './queries';
import { ListPostsQuery, ListPostsQueryVariables, Post } from '../../API'
import ApiErrorMessage from '../../components/apiErrorMessage';
import Loading from '../../components/Loading';

export default function HomeScreen() {

  const [activePost, setActivePostId] = useState<string | null>(null);
  const {data, loading, error, refetch} = useQuery<ListPostsQuery,ListPostsQueryVariables>(listPosts);
  
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
        renderItem={({ item }) => item && <FeedPost key={item.id} post={(item as Post)} isVisible={item.id === activePost} refetch={refetch}/>}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
        refreshing={loading}
        onRefresh={refetch}
      />
  );
}
