import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useForm, Control, Controller } from "react-hook-form"
import { IUser } from '../types/models'
import colors from '../theme/colors'
import user from '../assets/data/user.json'
import * as ImagePicker from 'expo-image-picker';


const profile_photo = 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540ldfavale%252Finstagram-clone/ImagePicker/748f0b54-5050-4eef-bdec-09ab4426c83f.jpeg'
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
type IEditableUserField = 'name' | 'image' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>

interface ICustomInput {
  label: string,
  multiline?: boolean,
  control: Control<IEditableUser, object>,
  name: IEditableUserField,
  rules?: {}
}
const CustomInput = ({
  name,
  control,
  label,
  multiline = false,
  rules = {}
}: ICustomInput) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View className="flex flex-row items-center p-4 space-x-6  w-full">
          <Text className=" text-grey w-1/4" >{label}</Text>
          <View className="flex-1">
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder={label}
              multiline
              className="border-b border-b-1 "
              style={{ borderColor: error ? colors.accent : colors.border }}
            />
            {error && <Text className="text-accent" >{error.type}</Text>}
          </View>
        </View>

      )}

    />

  )
}


const EditProfileScreen = () => {
  const { control, handleSubmit } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio
    }
  });

  const onSubmit = (data: IEditableUser) => {
    console.log("SUBMIT", data)
  }

  const [image, setImage] = useState<null | string>(null);

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

  return (
    <View className="p-6 space-y-8">
      <View className="flex items-center space-y-4">
        <Image source={{uri: image || profile_photo}} className="aspect-square h-24 rounded-full" />
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
            }
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
        <Text
          className="text-primary font-semibold text-base"
          onPress={handleSubmit(onSubmit)}>Submit</Text>
      </View>

    </View>
  )
}



export default EditProfileScreen
