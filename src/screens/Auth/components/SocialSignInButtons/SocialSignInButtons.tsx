import React, { useState } from 'react';
import CustomButton from '../CustomButton';
import { signInWithRedirect } from "aws-amplify/auth";
import { Alert } from 'react-native';

type Provider = 'Facebook' | 'Google'

const SocialSignInButtons = () => {

  const [loading,setLoading] = useState(false);

  const signInWithProvider = async (provider:Provider) => {
    try {
      setLoading(true)
      await signInWithRedirect({ provider });
     }catch (e) {
      if ((e as Error).name === 'OAuthSignInException'){
        Alert.alert('Error','Sorry, An error ocurred when trying to authenticate through '+ provider);
        console.log(e);
      }
      else
        Alert.alert('Error', e.message);
    } finally {
      setLoading(false);
    }
  };

  const onSignInFacebook = () => {
    console.log('onSignInFacebook');
    signInWithProvider('Facebook'); 
  };

  const onSignInGoogle = () => {
    console.log('onSignInGoogle');
    signInWithProvider('Google'); 
  };
  

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
