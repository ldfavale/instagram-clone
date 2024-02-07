import { View, Text, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Video, ResizeMode } from 'expo-av';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/colors';
interface IVideoPlayer {
  uri: string,
  shouldPlay: boolean
}

const VideoPlayer = ({ uri, shouldPlay }: IVideoPlayer) => {

  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  const [muted, setMuted] = useState(true);
  const [manuallyPaused, setManualyPaused] = useState(false)

  const toggleMuted = () => {
    setMuted((v) => !v)
  }

  return (
    <View className="">
      <Video
        ref={video}
        source={{ uri }}
        className="w-full aspect-square"
        // useNativeControls
        resizeMode={ResizeMode.COVER}
        isLooping
        isMuted={muted}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        shouldPlay={shouldPlay && !manuallyPaused}
      />
      <Pressable onPress={toggleMuted}
        className="bg-black z-10 absolute bottom-0 right-0 p-2 mb-2 mr-2 rounded-full opacity-75"
      >
        <Ionicons name={muted ? "volume-mute" : "volume-medium"} size={18} color={colors.white} />
      </Pressable>
      <Pressable
        className="bg-trasparent flex-1 w-full h-full  absolute top-0 flex items-center justify-center opacity-70"
        onPress={() =>{
          if(status.isPlaying){
            setManualyPaused(true)
            video.current.pauseAsync()
          }else{
            setManualyPaused(false)
            video.current.playAsync()
          }
        }}
      >
        {status.isPlaying ? "" : <FontAwesome5 name="play" size={60} color={colors.white} />}
      </Pressable>
    </View>
  )
}

export default VideoPlayer
