import { View, Text, Image } from 'react-native'
import React from 'react'
import {IUser} from '../types/models'
import { useNavigation } from '@react-navigation/native'
import { ProfileNavigationProp } from '../navigation/types'
import SignOutButton from './SignOutButton'
import { GetUserQuery } from '../API'
import default_user_image from '../assets/images/default_user.jpg'

export interface IProfileHeader {
  user: GetUserQuery["getUser"] | undefined | null
}

const ProfileHeader = ({user}:IProfileHeader) => {
  const navigation = useNavigation<ProfileNavigationProp>();

  const navigateToEditProfile = () => {
    navigation.navigate('EditProfile')
  }
  const uri = user?.image 
  navigation.setOptions({title: user?.username || "Profile"})
  return (
    <View className='p-6 space-y-4'>
    <View className="flex-row items-center justify-between  pt-6" >
      <Image source={uri ? { uri } : default_user_image} className="h-24 w-24 rounded-full" />
      <View className=" justify-center items-center ">
        <Text className='font-bold text-lg'>{user?.Posts?.items.length}</Text>
        <Text className='text-grey text-base'>Posts</Text>
      </View>
      <View className=" justify-center items-center ">
        <Text className='font-bold text-lg'>{user?.nofFollowers}</Text>
        <Text className='text-grey text-base'>Followers</Text>
      </View>
      <View className="justify-center items-center">
        <Text className='font-bold text-lg'>{user?.nofFollowing}</Text>
        <Text className='text-grey text-base'>Following</Text>
      </View>
    </View>
    <View className=''>
      <Text className='font-bold text-base'>{user?.username}</Text>
      <Text className='text-grey text-base leading-5'>{user?.bio}</Text>
    </View>
    <View className='flex-row w-full space-x-4'>
      <Text
      className='font-bold text-lg p-1 border border-1 border-gray-200 rounded-lg flex-1 text-center '
      onPress={() => navigateToEditProfile()}
      > Edit Profile </Text>
      <SignOutButton/>
    </View>
  </View>
  )
}


export default ProfileHeader
