import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen'
import CommentScreen from '../screens/CommentScreen'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../theme/colors';
import { SearchTabNavigatorParamList } from './types';

const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>();

const SearchTabNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: insets.top
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary
        }
      }}
    >
      <Tab.Screen name="User" component={HomeScreen} />
      <Tab.Screen name="Post" component={CommentScreen} />
    </Tab.Navigator>
  );
}

export default SearchTabNavigator
