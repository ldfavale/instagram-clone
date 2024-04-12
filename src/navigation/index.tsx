import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator'
import { RootNavigatorParamList } from './types'
import * as Linking from 'expo-linking';
import AuthStackNavigator from './AuthStackNavigator';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import Loading from '../components/Loading';

const prefix = Linking.createURL('/');



const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
  const linking = { prefixes: [prefix] };
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const { authStatus } = useAuthenticator(context => [context.authStatus]);

  console.log("authStatus => ",authStatus)
  if (authStatus !== "authenticated") {
    return (
      <Loading/>
    )
  }


  return (
    <NavigationContainer linking={linking} fallback={<Loading/>}>
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
