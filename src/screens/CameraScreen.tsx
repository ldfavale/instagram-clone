import { View, Text, Pressable, ActivityIndicator, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Camera, CameraPictureOptions, CameraRecordingOptions, CameraType, FlashMode, VideoQuality } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { CreatePostNavigationProp } from '../navigation/types';
import Loading from '../components/Loading';

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

const CameraScreen = () => {

  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null)
  const [camaraType, setCamaraType] = useState(CameraType.back)
  const [flash, setFlash] = useState(flashModes[0])
  const [cameraReady, setCameraReady] = useState(false)
  const camera = useRef<Camera>(null)
  const [isRecording, setIsRecording] = useState(false)
  const navigation = useNavigation<CreatePostNavigationProp>()

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
      setHasPermissions(cameraPermission.status === 'granted' && microphonePermission.status === 'granted')
    }
    getPermission()
  }, [])

  if (hasPermissions === null) {
    return <Loading/>;
  }
  if (hasPermissions === false) {
    return <Text>No access to the camera</Text>
  }

  const flipCamera = () => {
    setCamaraType(currentType => (
      currentType === CameraType.back ?
      CameraType.front :
      CameraType.back
    ))
  }
  const flipFlash = () => {
    const currentIndex = flashModes.indexOf(flash)
    const nextIndex = currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1;
    setFlash(flashModes[nextIndex])
  }

  const takePicture = async () => {
    if (!cameraReady && !camera.current) return;
    const options: CameraPictureOptions = {
      quality: 0.5,
      skipProcessing: true
    }
    // const result = await camera.current?.takePictureAsync(options)
    // console.log(result)
    // if(result?.uri){
        // navigation.navigate("Create",{images: [
        //   "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        //   "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg",
        //   "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg"
        // ]})
      navigation.navigate("Create",{image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg"})
      // navigation.navigate("Create",{video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"})
    // }else{
    //   Alert.alert("Error al cargar imagen")
    // }
  }

  const startRecording = async () => {
    console.warn("Start")
    if (!cameraReady && !camera.current || isRecording) return;
    const options: CameraRecordingOptions = {
      quality: VideoQuality['4:3'],
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false
    }
    setIsRecording(true)
    try {
      const result = await camera.current?.recordAsync(options)
      console.log(result)
    } catch (e) {
      console.log(e)
      setIsRecording(false)
    }
  }

  const stopRecording = () => {
    if (isRecording) {
      camera.current?.stopRecording()
      .then(() => {
        setIsRecording(false)
        console.warn("Stop")
      })
      .catch((err) => {
        console.error(err)
      });
    }
  }

  return (
    <View className="flex-1 bg-black">
      <Camera
        ref={camera}
        className="aspect-[9/16] w-full"
        type={camaraType}
        ratio='16:9'
        flashMode={flash}
        onCameraReady={() => setCameraReady(true)}
      />
      <View className="flex-row justify-between items-center absolute w-full  p-6 top-0">
        <MaterialIcons name="close" size={24} color={colors.white} />
        <Pressable onPress={flipFlash}>
          <MaterialIcons name={flashModeToIcon[flash]} size={24} color={colors.white} />
        </Pressable>

        <MaterialIcons name="settings" size={24} color={colors.white} />
      </View>
      <View className="flex-row justify-around items-center w-full absolute bottom-2">
        <MaterialIcons name="photo-library" size={24} color={colors.white} />
        {/* {cameraReady && */}
          <Pressable onPress={takePicture} onLongPress={startRecording} onPressOut={stopRecording}>
            <MaterialIcons name="circle" size={94} color={isRecording ? colors.accent : colors.white} />
          </Pressable>
        {/* } */}

        <Pressable onPress={flipCamera}>
          <MaterialIcons name="flip-camera-ios" size={24} color={colors.white} />
        </Pressable>
      </View>
    </View >
  )
}

export default CameraScreen
