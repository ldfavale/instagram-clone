import {gql} from '@apollo/client'

export const createPost = gql`mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
    id
    description
    image
    images
    video
    nofComments
    nofLikes
    userID
  }
}
`