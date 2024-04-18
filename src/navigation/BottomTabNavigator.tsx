import { View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import logo from '../assets/images/logo.png'
import { MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import colors from '../theme/colors';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import { BottomTabNavigatorParamList } from './types';
import SearchTabNavigator from './SearchTabNavigator';
import CreatePostStackNavigator from './CreatePostStackNavigator';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const HeaderTitle = () => {
  return (
    <View className="">
      <Image source={logo} className="w-28 h-9" resizeMode='contain' />
    </View>
  )
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomeStack'
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.black
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          headerTitle: HeaderTitle,
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (<MaterialIcons name="home-filled" size={size} color={color} />)
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTabNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (<MaterialIcons name="search" size={size} color={color} />),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Upload"
        component={CreatePostStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="plus-circle-outline" size={size} color={color} />),
          headerShown: false
          
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="heart-outline" size={size} color={color} />)

        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (<FontAwesome name="user-circle-o" size={size} color={color} />),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  )



}

export default BottomTabNavigator
