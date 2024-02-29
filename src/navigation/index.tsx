import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, View } from 'react-native'
import logo from '../assets/images/logo.png'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Feed'
        screenOptions={{
          headerShown: true,

        }}>
        <Stack.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            headerTitle: HeaderTitle,
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile'

          }}

        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}

const HeaderTitle = () => {
  return (
    <View className="">
      <Image source={logo} className="w-28 h-9" resizeMode='contain' />
    </View>
  )
}


export default Navigation
