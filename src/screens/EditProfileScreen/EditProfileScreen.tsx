import { View, Text, Image, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import * as ImagePicker from 'expo-image-picker';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { DeleteUserMutation, DeleteUserMutationVariables, GetUserQuery, GetUserQueryVariables, UpdateUserMutation, UpdateUserMutationVariables, UsersByUsernameQuery, UsersByUsernameQueryVariables } from '../../API'
import { deleteUser as deleteUserMutation, getUser, usersByUsername } from './queries'
import Loading from '../../components/Loading';
import ApiErrorMessage from '../../components/apiErrorMessage';
import { updateUser } from './queries';
import { useNavigation } from '@react-navigation/native';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { AuthUser, deleteUser } from 'aws-amplify/auth';
import DEFAULT_USER_IMAGE from '../../assets/images/default_user.jpg'
import { IEditableUser } from '../../components/CustomInput';
import CustomInput from '../../components/CustomInput';


const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const userSelector = (context: { user: AuthUser; }) => [context.user];
const EditProfileScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, setValue } = useForm<IEditableUser>();
  const [image, setImage] = useState<null | string>(null);

   // Defining Mutations
   const [doUpdateUser, {loading:updateLoading, error:updateError}] = useMutation<UpdateUserMutation,UpdateUserMutationVariables>(updateUser);
   const [doDeleteUser, {loading:deleteLoading, error:deleteError}] = useMutation<DeleteUserMutation,DeleteUserMutationVariables>(deleteUserMutation);
 

  // Getting Info from Authenticated user
  const { user:loggedUser } = useAuthenticator(userSelector);
  let userId = loggedUser.userId;
  const { data, loading, error} = useQuery<GetUserQuery,GetUserQueryVariables>(getUser,{variables: {id: userId}});
  const [getUsersByUsername] = useLazyQuery<UsersByUsernameQuery,UsersByUsernameQueryVariables>(usersByUsername);
  const user = data?.getUser
  const uri = image || user?.image

 // Setting form with the data
  useEffect(()=>{
    if(user){
      setValue("bio", user?.bio)
      setValue("name", user?.name)
      setValue("username", user?.username)
      setValue("website", user?.website)
    }
  },[user])


  // Handle CRUD Operations

  const onSubmit = async (formData: IEditableUser) => {
    await doUpdateUser({
      variables: {input: {id: userId, ...formData}}
    })
    if(navigation.canGoBack()){
      navigation.goBack();
    }
  }

  const confirmDeleting = () => {
    Alert.alert("Are you sure?","Deleting your user profile is permanent",[
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Yes Delete",
        style: "destructive",
        onPress: handleDeleteUser

      }
    ])
  };


  async function handleDeleteUser() {
    try {
      await doDeleteUser({variables: {input: { id: userId}}})
      await deleteUser();
    } catch (error) {
      console.log(error);
    }
  }

  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  //Validation
  const validateUsername = async (username: string) => {
    try {
      const response = await  getUsersByUsername({variables: {username}})
      console.log(response)
      if(response.error){
        Alert.alert("Failed to fetch username")
        return "Failed to fetch username"
      }
      const users = response.data?.usersByUsername?.items
      const isNotTakenByMyself = !users?.map(u=>u?.id).includes(user?.id)
      if(users && users.length > 0 && isNotTakenByMyself){
        return "Username is already taken"
      }
    } catch (e) {
      Alert.alert("Failed to fetch username")
      console.log("Failed to fetch username", e);
    }
    return true
  }

  // Displaying 

  if(loading || updateLoading || deleteLoading ){
    return <Loading/>;
  }
  
  if(error || updateError || deleteError){
    return <ApiErrorMessage 
      title='Error fetching or updating User Data' 
      message={error?.message || updateError?.message  || deleteError?.message}
      onRetry={()=>{}}
    />;
  }

  
  

  return (
    <View className="p-6 space-y-8">
      <View className="flex items-center space-y-4">
        <Image source={uri ? { uri } : DEFAULT_USER_IMAGE} className="aspect-square h-24 rounded-full" />
        <Text className="text-primary" onPress={pickImage} >Change profile photo</Text>
      </View>
      <View className="w-full ">
        <CustomInput
          control={control}
          name="name"
          label="Name"
          rules={{
            required: "Name is required ",
          }}
        />
        <CustomInput
          control={control}
          name="username"
          label="Username"
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username Should be more than 3 character"
            },
            validate: validateUsername,
          }}
        />
        <CustomInput
          control={control}
          name="website"
          label="Website"
          rules={{
            pattern: {
              value: URL_REGEX,
              message: "Invalid url"
            }
          }}
        />
        <CustomInput
          control={control}
          name="bio"
          label="Bio"
          multiline
          rules={{
            maxLength: {
              value: 200,
              message: "Bio Shouldn't be more than 200 character"
            }
          }}
        />
      </View>
      <View className="items-center ">
        <Pressable
          className="text-primary font-semibold text-base"
          onPress={handleSubmit(onSubmit)}>
            <Text>
              Submit
            </Text>
        </Pressable>
      </View>
      <View className="items-center ">
        <Pressable
          
          onPress={() => confirmDeleting()}>
            <Text className="text-accent font-semibold text-base">
              Delete
            </Text>
        </Pressable>
      </View>

    </View>
  )
}



export default EditProfileScreen
