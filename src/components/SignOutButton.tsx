import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { AuthUser } from "aws-amplify/auth";
import React from "react";
import { Pressable, Text } from "react-native";


const userSelector = (context: { user: AuthUser; }) => [context.user];

const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);
  return (
    <Pressable onPress={signOut} >
            <Text className='font-bold text-lg p-1 border border-1 border-gray-200 rounded-lg flex-1 text-center '>Sign Out</Text>
    </Pressable>
  );
};

export default SignOutButton
