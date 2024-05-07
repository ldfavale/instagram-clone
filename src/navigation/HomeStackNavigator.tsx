import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { HomeStackNavigatorParamList } from '../navigation/types';
import EditPostScreen from '../screens/EditPostScreen';
import PostLikesScreen from '../screens/PostLikesScreen';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='Feed'
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Feed"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="UserProfile"
          component={ProfileScreen}
          options={{
            title: 'Profile'
          }}

        />
        <Stack.Screen
          name="EditPost"
          component={EditPostScreen}
          options={{
            title: 'Profile'
          }}

        />
        <Stack.Screen
          name="PostLikes"
          component={PostLikesScreen}
          options={{headerShown: true,
          title: "Likes"}}
        />
      </Stack.Navigator>
  )
}

export default HomeStackNavigator
