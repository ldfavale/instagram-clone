import React from 'react'
import { FlatList } from 'react-native'
import { listUsers } from './queries'
import { useQuery } from '@apollo/client'
import ApiErrorMessage from '../../components/apiErrorMessage'
import Loading from '../../components/Loading'
import { ListUsersQuery, ListUsersQueryVariables } from '../../API'
import UserListItem from '../../components/UserListItem'

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





export default UserSearchScreen