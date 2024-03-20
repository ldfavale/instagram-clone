/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
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
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
  onUpdateComment(filter: $filter) {
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
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
  onDeleteComment(filter: $filter) {
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
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreatePostUser = /* GraphQL */ `subscription OnCreatePostUser($filter: ModelSubscriptionPostUserFilterInput) {
  onCreatePostUser(filter: $filter) {
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
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostUserSubscriptionVariables,
  APITypes.OnCreatePostUserSubscription
>;
export const onUpdatePostUser = /* GraphQL */ `subscription OnUpdatePostUser($filter: ModelSubscriptionPostUserFilterInput) {
  onUpdatePostUser(filter: $filter) {
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
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostUserSubscriptionVariables,
  APITypes.OnUpdatePostUserSubscription
>;
export const onDeletePostUser = /* GraphQL */ `subscription OnDeletePostUser($filter: ModelSubscriptionPostUserFilterInput) {
  onDeletePostUser(filter: $filter) {
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
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostUserSubscriptionVariables,
  APITypes.OnDeletePostUserSubscription
>;
