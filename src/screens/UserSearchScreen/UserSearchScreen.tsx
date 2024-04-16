import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { listUsers } from './queries'
import { useQuery } from '@apollo/client'
import ApiErrorMessage from '../../components/apiErrorMessage'
import Loading from '../../components/Loading'
import { ListUsersQuery, ListUsersQueryVariables } from '../../API'

const UserSearchScreen = () => {
    const { data, loading, error, refetch} = useQuery<ListUsersQuery,ListUsersQueryVariables>(listUsers)
    
    if(loading){ return <Loading/> }
    if(error){return <ApiErrorMessage title='Error Fetching Users' message={error.message}/>}
    
    const users = data?.listUsers?.items

  return (
    <FlatList 
    data={users}
    renderItem={(item)=> item && <UserListItem user={item}/>}
    onRefresh={() => refetch()}
    refreshing={loading}
    />
  )
}



const UserListItem = (user) => {
  return (
    <View className="flex flex-row items-center p-2 space-x-3">
        <Image source={{uri: user}} className="w-10 h-10 rounded-full"/>
        <View className="flex-1 ">
            <Text className="flex-1 font-bold">{user.item.name}</Text>
            <Text className=" ">{user.item.username}</Text>
        </View>
    </View>
  )
}


export default UserSearchScreen