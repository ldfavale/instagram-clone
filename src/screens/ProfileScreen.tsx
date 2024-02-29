import React from 'react'
import user from '../assets/data/user.json'
import ProfileHeader from '../components/ProfileHeader'
import FeedGridView from '../components/FeedGridView'
import { useNavigation, useRoute } from '@react-navigation/native'

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { userId } = route.params;
  navigation.setOptions({title: user.username})
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
