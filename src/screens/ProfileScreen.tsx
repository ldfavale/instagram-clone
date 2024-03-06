import React, { useEffect, useState } from 'react'
import user from '../assets/data/user.json'
import ProfileHeader from '../components/ProfileHeader'
import FeedGridView from '../components/FeedGridView'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ProfileNavigationProp, MyProfileNavigationProp, ProfileRouteProp, MyProfileRouteProp } from '../navigation/types'
const ProfileScreen = () => {
  const route = useRoute<ProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<ProfileNavigationProp | MyProfileNavigationProp>();
  const userId = route.params?.userId;
  useEffect(() => {
    navigation.setOptions({ title: user.username })
  }, [])
  return (
    <>
      <FeedGridView
        data={user.posts}
        listHeaderComponent={<ProfileHeader user={user} />}
      />
    </>
  )
}

export default ProfileScreen
