import { View, Image, TextInput, useWindowDimensions} from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { createPost } from './queries'
import colors from '../../theme/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CreatePostNavigationProp, CreatePostRouteProp } from '../../navigation/types';
import CustomButton from '../Auth/components/CustomButton';
import { useMutation } from '@apollo/client';
import { CreatePostMutation, CreatePostMutationVariables } from '../../API';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { AuthUser } from 'aws-amplify/auth';
import Carousel from '../../components/Carousel';
import VideoPlayer from '../../components/VideoPlayer';

const userSelector = (context: { user: AuthUser; }) => [context.user];

const CreatePostScreen = () => {
  const navigation = useNavigation<CreatePostNavigationProp>();
  const route = useRoute<CreatePostRouteProp>();
  const {user} = useAuthenticator(userSelector)
  const [doCreatePost, {loading}] = useMutation<CreatePostMutation, CreatePostMutationVariables>(createPost, {refetchQueries: ["listPosts"]})
  const [description, setDescription] = useState<string>("Escribe una descripcion aqui...")
  const {image,images,video} = route.params;  
  const { width } = useWindowDimensions();
  

  const sharePost = async() => {
    
    try {
      const response = await doCreatePost({variables:{input:{
        image,
        images,
        video,
        description,
        nofComments:0,
        nofLikes:0,
        userID:user.userId
      }}});
      console.log("doCreatePost response: ",response);
      navigation.popToTop();
      navigation.navigate("HomeStack");
      
    } catch (e) {
      console.log("Error:",e)      
    }
  }

  const getContent = () => {
    if (image)
      return (
        <Image source={{uri: image}} className='w-full aspect-square  rounded'/>
      )
    else if (images && images.length)
      return <Carousel images={images} full={false} rounded dots={false}/>
    else if (video)
      return <VideoPlayer uri={video} shouldPlay={false} />
  }

  const content = getContent();

  return (
    <View className="flex-1 bg-black items-center">
      <View className="flex-row justify-between items-center w-full px-4 pt-8 pb-2 ">
        <AntDesign name="arrowleft" onPress={()=> navigation.goBack()} size={24} color={colors.white} />

        {/* <Pressable >
          <Text className='text-primary font-bold text-base'>Next</Text>
        </Pressable> */}
      </View>
      <View className="p-4 " style={{width}}>
        {content}
      </View>
      <TextInput 
        className='text-white placeholder:text-white w-full px-4' 
        placeholder='Escribe una descripcion aqui...'
        value={description}
        onChangeText={setDescription}
        multiline
      />

      
      <View className="flex-row justify-around items-center w-full absolute bottom-5 px-4">
        <CustomButton 
          text={loading ? "Loading..." : 'Compartir'}
          bgColor={colors.primary} 
          fgColor={colors.white}
          onPress={sharePost}
          disabled={loading}
        />
      </View>
    </View >
  )
}

export default CreatePostScreen