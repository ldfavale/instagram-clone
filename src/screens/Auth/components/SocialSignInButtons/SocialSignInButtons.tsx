import React from 'react';
import CustomButton from '../CustomButton';
import { signInWithRedirect } from "aws-amplify/auth";

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.log('onSignInFacebook');
    signInWithRedirect({ provider: 'Facebook' });
  };

  const onSignInGoogle = () => {
    console.log('onSignInGoogle');
    signInWithRedirect({ provider: 'Google' }); 
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
