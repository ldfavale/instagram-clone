import { View, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { getPost, updatePost } from './queries'
import colors from '../../theme/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { EditPostNavigationProp, EditPostRouteProp } from '../../navigation/types';
import CustomButton from '../Auth/components/CustomButton';
import { useMutation, useQuery } from '@apollo/client';
import { GetPostQuery, GetPostQueryVariables, UpdatePostMutation, UpdatePostMutationVariables } from '../../API';
import ApiErrorMessage from '../../components/apiErrorMessage';



const EditPostScreen = () => {
  const navigation = useNavigation<EditPostNavigationProp>();
  const [doUpdatePost, {loading, error: updatePostError, data:updatePostData}] = useMutation<UpdatePostMutation, UpdatePostMutationVariables>(updatePost)
  const route = useRoute<EditPostRouteProp>();
  const {postId} = route.params;  
  const  {data,error} = useQuery<GetPostQuery, GetPostQueryVariables>(getPost,{variables: {id:postId}})
  const [description, setDescription] = useState<string>("Escribe una descripcion aqui...")
  const post = data?.getPost

  useEffect(()=>{
    if(post?.description){
      setDescription(post.description);
    }
  },[])
  

  const editPost = async() => {
    if(!post?.id) { return }
    try {
      doUpdatePost(
        {variables:
          {input:{
             id: post.id,
             description: description
          }}
        });
      navigation.popToTop();
      navigation.navigate("HomeStack");
      
    } catch (e) {
      console.log("Error:",e)      
    }
  }

  if (error || updatePostError){
    return <ApiErrorMessage 
      title='Error fetching or updating Post Data' 
      message={error?.message || updatePostError?.message}
      onRetry={()=>{}}
    />;
  }


  return (
    <View className="flex-1 bg-black items-center">
      <View className="flex-row justify-between items-center w-full px-4 pt-8 pb-2 ">
        <AntDesign name="arrowleft" onPress={()=> navigation.goBack()} size={24} color={colors.white} />
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
          text={loading ? "Loading..." : 'Update'}
          bgColor={colors.primary} 
          fgColor={colors.white}
          onPress={editPost}
          disabled={loading}
        />
      </View>
    </View >
  )
}

export default EditPostScreen