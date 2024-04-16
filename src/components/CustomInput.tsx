import React from "react";
import { Control, Controller } from "react-hook-form"
import { User } from "../API"
import { Text, TextInput, View } from "react-native";
import colors from "../theme/colors";

type IEditableUserField = 'name' | 'image' | 'username' | 'website' | 'bio';
export type IEditableUser = Pick<User, IEditableUserField>

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
                value={value || ""}
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

  export default CustomInput