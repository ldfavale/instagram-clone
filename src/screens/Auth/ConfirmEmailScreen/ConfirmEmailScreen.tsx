import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/core';
import { useForm } from 'react-hook-form';
import {
  ConfirmEmailNavigationProp,
  ConfirmEmailRouteProp,
} from '../../../types/navigation';
import { useRoute } from '@react-navigation/native';
import { confirmSignUp, resendSignUpCode, type ConfirmSignUpInput } from 'aws-amplify/auth';


const ConfirmEmailScreen = () => {
  const route = useRoute<ConfirmEmailRouteProp>();
  const { control, handleSubmit, watch } = useForm<ConfirmSignUpInput>({
    defaultValues: { username: route.params?.username },
  });
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<ConfirmEmailNavigationProp>();
  const usrname = watch('username');

  const onConfirmPressed = async ({
    username,
    confirmationCode
  }: ConfirmSignUpInput) => {
    if(loading) {return};
    try {
      setLoading(true)
      await confirmSignUp({
        username,
        confirmationCode
      });
       navigation.navigate('Sign in');
    } catch (error) {
      Alert.alert('Error confirming sign up', error.message);
    } finally {
      setLoading(false)
    }
  };

  const onSignInPress = () => {
    navigation.navigate('Sign in');
  };

  const onResendPress = async () => {
    try {
      await resendSignUpCode({ username: usrname });
      Alert.alert('Check your email', 'The code has been sent');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <FormInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
          }}
        />

        <FormInput
          name="confirmationCode"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: 'Confirmation code is required',
          }}
        />

        <CustomButton text={loading ? "Loading..." : "Confirm"} onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
