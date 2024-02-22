import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../theme/colors';

const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch
]

const flashModeToIcon = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight'
}

const PostUploadScreen = () => {

  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null)
  const [camaraType, setCamaraType] = useState(Camera.Constants.Type.back)
  const [flash, setFlash] = useState(flashModes[0])

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
      setHasPermissions(cameraPermission.status === 'granted' && microphonePermission.status === 'granted')
    }
    getPermission()
  }, [])

  if (hasPermissions === null) {
    return <Text>Loading...</Text>
  }
  if (hasPermissions === false) {
    return <Text>No access to the camera</Text>
  }

  const flipCamera = () => {
    setCamaraType(currentType => (
      currentType === Camera.Constants.Type.back ?
        Camera.Constants.Type.front :
        Camera.Constants.Type.back
    ))
  }
  const flipFlash = () => {
    const currentIndex = flashModes.indexOf(flash)
    const nextIndex = currentIndex === flashModes.length -1 ? 0 : currentIndex + 1;
    setFlash(flashModes[nextIndex])

  }

  console.log(flashModeToIcon[flash])
  console.log("Flash => ",flash)

  return (
    <View className="flex-1 bg-black">
      <Camera className="aspect-[3/4] w-full" type={camaraType} ratio='4:3' flashMode={flash} />
      <View className="flex-row justify-between items-center absolute w-full  p-6 top-0">
        <MaterialIcons name="close" size={24} color={colors.white} />
        <Pressable onPress={flipFlash}>
          <MaterialIcons name={flashModeToIcon[flash]} size={24} color={colors.white} />
        </Pressable>

        <MaterialIcons name="settings" size={24} color={colors.white} />
      </View>
      <View className="flex-row justify-around items-center w-full absolute bottom-5">
        <MaterialIcons name="photo-library" size={24} color={colors.white} />
        <MaterialIcons name="circle" size={94} color={colors.white} />
        <Pressable onPress={flipCamera}>
          <MaterialIcons name="flip-camera-ios" size={24} color={colors.white} />
        </Pressable>
      </View>
    </View >
  )
}

export default PostUploadScreen
