import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CreatePostStackNavigatorParamList } from './types';
import CreatePostScreen from '../screens/CreatePostScreen';
import CameraScreen from '../screens/CameraScreen';

const Stack = createNativeStackNavigator<CreatePostStackNavigatorParamList>();


const CreatePostStackNavigator = () => {
  
  return (
    <Stack.Navigator
      initialRouteName='Camera'
      screenOptions={
        {headerShown: false}
      }
      >
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
      />
      <Stack.Screen
        name="Create"
        component={CreatePostScreen}
      />
    </Stack.Navigator>
  )
}

export default CreatePostStackNavigator
