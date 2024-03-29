import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator'
import { RootNevigatorParamList } from './types'
import * as Linking from 'expo-linking';
import { ActivityIndicator, Text, View } from 'react-native';
import AuthStackNavigator from './AuthStackNavigator';
import { useAuthenticator } from '@aws-amplify/ui-react-native';

const prefix = Linking.createURL('/');



const Stack = createNativeStackNavigator<RootNevigatorParamList>();

const Navigation = () => {
  const linking = { prefixes: [prefix] };
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const { authStatus } = useAuthenticator(context => [context.authStatus]);

  console.log("authStatus => ",authStatus)
  if (authStatus === "configuring") {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator />
      </View>
    )
  }


  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        initialRouteName='Auth'
        screenOptions={{
          headerShown: false,
        }}>
        {authStatus !== 'authenticated' ? (<Stack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{ headerShown: false }}
        />) :
          (<Stack.Screen
            name="Home"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />)}

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}



export default Navigation
