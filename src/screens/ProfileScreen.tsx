import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import user from '../assets/data/user.json'
import ProfileHeader from '../components/ProfileHeader'
import FeedGridView from '../components/FeedGridView'

const ProfileScreen = () => {
  return (
    <>
      <FeedGridView
        data={user.posts}
        listHeaderComponent={<ProfileHeader user={user}/>}
      />
    </>
  )
}

export default ProfileScreen
