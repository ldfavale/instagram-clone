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
import EditProfileScreen from '../screens/EditProfileScreen';
import { useQuery } from '@apollo/client';
import { GetUserQuery, GetUserQueryVariables } from '../API';
import { getUser } from './queries';

const prefix = Linking.createURL('/');



const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
  const linking = { prefixes: [prefix] };
  const { user:cognitoUser } = useAuthenticator((context) => [context.user]);
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const { data } = useQuery<GetUserQuery,GetUserQueryVariables>(getUser,{variables: {id: cognitoUser?.userId}});
  const user = data?.getUser;

  if (authStatus === "configuring") {
    return (
      <Loading/>
    )
  }

  let StackScreens;

  if(!cognitoUser){
    StackScreens = (
      <Stack.Screen
        name="Auth"
        component={AuthStackNavigator}
        options={{ headerShown: false }}
      />)
  }else if(!user?.username){
    StackScreens = (<Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{ title: "Setup Profile" }}
    />)
  }else{
    StackScreens = (<Stack.Screen
      name="Home"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />)
  }

  return (
    <NavigationContainer linking={linking} fallback={<Loading/>}>
      <Stack.Navigator
        initialRouteName='Auth'
        screenOptions={{
          headerShown: false,
        }}>
        {StackScreens}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}



export default Navigation
