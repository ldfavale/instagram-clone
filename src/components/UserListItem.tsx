import React from 'react'
import { View, Text, Image } from 'react-native'
import default_user_image from '../assets/images/default_user.jpg'


const UserListItem = (item:any) => {
    const user = item?.item?.item;
    console.log("user",user)
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

export default UserListItem