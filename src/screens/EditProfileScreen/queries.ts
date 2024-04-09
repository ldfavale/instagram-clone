import {gql} from '@apollo/client'

export const getUser  = gql`query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    image
    bio
    username
    website
    createdAt
    updatedAt
    __typename
  }
}
`

export const updateUser = /* GraphQL */ gql`mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    name
    image
    bio
    username
    website    
    createdAt
    updatedAt
    __typename
  }
}
`


  
