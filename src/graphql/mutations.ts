/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    comment
    userID
    postID
    User {
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
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      LikedPosts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    Post {
      id
      description
      image
      images
      video
      nofComments
      nofLikes
      userID
      User {
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
        createdAt
        updatedAt
        __typename
      }
      Likes {
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
    id
    comment
    userID
    postID
    User {
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
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      LikedPosts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    Post {
      id
      description
      image
      images
      video
      nofComments
      nofLikes
      userID
      User {
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
        createdAt
        updatedAt
        __typename
      }
      Likes {
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
    id
    comment
    userID
    postID
    User {
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
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      LikedPosts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    Post {
      id
      description
      image
      images
      video
      nofComments
      nofLikes
      userID
      User {
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
        createdAt
        updatedAt
        __typename
      }
      Likes {
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
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
    User {
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
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      LikedPosts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    Likes {
      items {
        id
        postId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Comments {
      items {
        id
        comment
        userID
        postID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
    id
    description
    image
    images
    video
    nofComments
    nofLikes
    userID
    User {
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
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      LikedPosts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    Likes {
      items {
        id
        postId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Comments {
      items {
        id
        comment
        userID
        postID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
    id
    description
    image
    images
    video
    nofComments
    nofLikes
    userID
    User {
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
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      LikedPosts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    Likes {
      items {
        id
        postId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Comments {
      items {
        id
        comment
        userID
        postID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
        __typename
      }
      nextToken
      __typename
    }
    Comments {
      items {
        id
        comment
        userID
        postID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    LikedPosts {
      items {
        id
        postId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
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
    nofPosts
    nofFollowers
    nofFollowing
    email
    Posts {
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
        __typename
      }
      nextToken
      __typename
    }
    Comments {
      items {
        id
        comment
        userID
        postID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    LikedPosts {
      items {
        id
        postId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
        __typename
      }
      nextToken
      __typename
    }
    Comments {
      items {
        id
        comment
        userID
        postID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    LikedPosts {
      items {
        id
        postId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createPostUser = /* GraphQL */ `mutation CreatePostUser(
  $input: CreatePostUserInput!
  $condition: ModelPostUserConditionInput
) {
  createPostUser(input: $input, condition: $condition) {
    id
    postId
    userId
    post {
      id
      description
      image
      images
      video
      nofComments
      nofLikes
      userID
      User {
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
        createdAt
        updatedAt
        __typename
      }
      Likes {
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    user {
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
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      LikedPosts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostUserMutationVariables,
  APITypes.CreatePostUserMutation
>;
export const updatePostUser = /* GraphQL */ `mutation UpdatePostUser(
  $input: UpdatePostUserInput!
  $condition: ModelPostUserConditionInput
) {
  updatePostUser(input: $input, condition: $condition) {
    id
    postId
    userId
    post {
      id
      description
      image
      images
      video
      nofComments
      nofLikes
      userID
      User {
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
        createdAt
        updatedAt
        __typename
      }
      Likes {
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    user {
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
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      LikedPosts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostUserMutationVariables,
  APITypes.UpdatePostUserMutation
>;
export const deletePostUser = /* GraphQL */ `mutation DeletePostUser(
  $input: DeletePostUserInput!
  $condition: ModelPostUserConditionInput
) {
  deletePostUser(input: $input, condition: $condition) {
    id
    postId
    userId
    post {
      id
      description
      image
      images
      video
      nofComments
      nofLikes
      userID
      User {
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
        createdAt
        updatedAt
        __typename
      }
      Likes {
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    user {
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
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      LikedPosts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostUserMutationVariables,
  APITypes.DeletePostUserMutation
>;
