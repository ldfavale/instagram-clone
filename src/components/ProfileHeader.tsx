import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import {IUser} from '../types/models'
import { useNavigation } from '@react-navigation/native'
import { ProfileNavigationProp } from '../navigation/types'
import SignOutButton from './SignOutButton'

interface IProfileHeader {
  user: IUser
}

const ProfileHeader = ({user}:IProfileHeader) => {
  const navigation = useNavigation<ProfileNavigationProp>();

  const navigateToEditProfile = () => {
    navigation.navigate('EditProfile')
  }

  return (
    <View className='p-6 space-y-4'>
    <View className="flex-row items-center justify-between  pt-6" >
      <Image source={{ uri: user.image }} className="h-24 w-24 rounded-full" />
      <View className=" justify-center items-center ">
        <Text className='font-bold text-lg'>98</Text>
        <Text className='text-grey text-base'>Posts</Text>
      </View>
      <View className=" justify-center items-center ">
        <Text className='font-bold text-lg'>2.919</Text>
        <Text className='text-grey text-base'>Followers</Text>
      </View>
      <View className="justify-center items-center">
        <Text className='font-bold text-lg'>245</Text>
        <Text className='text-grey text-base'>Following</Text>
      </View>
    </View>
    <View className=''>
      <Text className='font-bold text-base'>ldfavale</Text>
      <Text className='text-grey text-base leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime dignissimos id possimus ullam animi itaque deleniti nulla!</Text>
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
