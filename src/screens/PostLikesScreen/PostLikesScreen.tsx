import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { PostLikesRouteProp } from '../../navigation/types';
import { useRoute } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { likesForPostByUser } from './queries';
import { LikesForPostByUserQuery, LikesForPostByUserQueryVariables } from '../../API';
import UserListItem from '../../components/UserListItem';
import Loading from '../../components/Loading';
import ApiErrorMessage from '../../components/apiErrorMessage';

const PostLikesScreen = () => {

  const route = useRoute<PostLikesRouteProp>();
  const {data,loading,error,refetch} = useQuery<LikesForPostByUserQuery,LikesForPostByUserQueryVariables>(likesForPostByUser,{variables:{postID:route.params.id}})
  const likes = data?.likesForPostByUser?.items.map((i=>i?.User))

  if(loading){ return <Loading/> }
  if(error){return <ApiErrorMessage title='Error Fetching Users' message={error.message}/>}

  return (
    <View>
      <FlatList
        data={likes}
        renderItem={(item) => <UserListItem item={item} />}
        onRefresh={refetch}
        refreshing={loading}
      />
    </View>
  )
}

export default PostLikesScreen