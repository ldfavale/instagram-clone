import {gql} from '@apollo/client'


export const listPosts  = gql`
query listPosts(
    $filter: ModelPostFilterInput
    $limit: Int, 
    $nextToken: String, 
) {
    listPosts(filter: $filter ,limit: $limit, nextToken: $nextToken, ) {
      items {
        id
        description
        image
        images
        video
        nofComments
        nofLikes
        userID
        createdAt
        updatedAt
        User {
          id
          name
          username
          image
        }
        Comments {
          items {
            id
            comment
            User {
              id
              name
              username
            }
          }
        }
      }
      nextToken
      
    }
  }`
  
