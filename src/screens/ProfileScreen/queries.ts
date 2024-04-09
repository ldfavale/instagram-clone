import {gql} from '@apollo/client'

  
export const getUser  = gql`query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      image
      bio
      username
      website
      nofPosts
      nofFollowers
      nofFollowing
      email
      Posts {
        items{
          id
          image
          images
          video   
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
  `