import { View, Text, FlatList, Image, TextInput } from 'react-native'
import React from 'react'
import { listUsers } from './queries'
import { useQuery } from '@apollo/client'
import ApiErrorMessage from '../../components/apiErrorMessage'
import Loading from '../../components/Loading'
import { ListUsersQuery, ListUsersQueryVariables } from '../../API'
import default_user_image from '../../assets/images/default_user.jpg'

const UserSearchScreen = () => {
    const { data, loading, error, refetch} = useQuery<ListUsersQuery,ListUsersQueryVariables>(listUsers)
    
    if(loading){ return <Loading/> }
    if(error){return <ApiErrorMessage title='Error Fetching Users' message={error.message}/>}
    
    const users = data?.listUsers?.items

  return (
    <FlatList 
    data={users}
    renderItem={(item)=> item && <UserListItem item={item}/>}
    onRefresh={() => refetch()}
    refreshing={loading}
    />
  )
}



const UserListItem = (item) => {
  const user = item?.item?.item;
  const image = user?.image ? {uri: user?.image} : default_user_image;
  return (
    user && <View className="flex flex-row items-center p-2 space-x-3">
        <Image source={image} className="w-10 h-10 rounded-full"/>
        <View className="flex-1 ">
            <Text className="flex-1 font-bold">{user.name}</Text>
            <Text className=" ">{user.username}</Text>
        </View>
    </View>
  )
}


export default UserSearchScreen