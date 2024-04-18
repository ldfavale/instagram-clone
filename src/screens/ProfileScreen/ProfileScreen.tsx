import React from 'react'
import ProfileHeader from '../../components/ProfileHeader'
import FeedGridView from '../../components/FeedGridView'
import { useRoute } from '@react-navigation/native'
import { ProfileRouteProp, MyProfileRouteProp } from '../../navigation/types'
import { useQuery } from '@apollo/client'
import { getUser } from './queries' 
import Loading from '../../components/Loading'
import ApiErrorMessage from '../../components/apiErrorMessage'
import { GetUserQuery, GetUserQueryVariables, User } from '../../API'
import { useAuthenticator } from '@aws-amplify/ui-react-native'
import { AuthUser } from 'aws-amplify/auth'

const userSelector = (context: { user: AuthUser; }) => [context.user];

const ProfileScreen = () => {
  const route = useRoute<ProfileRouteProp | MyProfileRouteProp>();
  const { user } = useAuthenticator(userSelector);
  let userId = route.params?.userId || user.userId;

  console.log("User ID => ",userId)
  const { data, loading, error } = useQuery<GetUserQuery, GetUserQueryVariables>(getUser, {variables: {id: userId}});

  
  if(loading){ return <Loading/> }
  if(error){return <ApiErrorMessage title='Error Fetching User' message={error.message}/>}
  
  const userProfile = data?.getUser;
  

  return (
    <>
      <FeedGridView
        data={userProfile?.Posts?.items}
        listHeaderComponent={<ProfileHeader user={userProfile} />}
      />
    </>
  )
}

export default ProfileScreen
