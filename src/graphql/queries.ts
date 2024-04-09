/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const commentsByUserID = /* GraphQL */ `query CommentsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByUserIDQueryVariables,
  APITypes.CommentsByUserIDQuery
>;
export const commentsByPostID = /* GraphQL */ `query CommentsByPostID(
  $postID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByPostID(
    postID: $postID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByPostIDQueryVariables,
  APITypes.CommentsByPostIDQuery
>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
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
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const postsByUserID = /* GraphQL */ `query PostsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByUserIDQueryVariables,
  APITypes.PostsByUserIDQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getPostUser = /* GraphQL */ `query GetPostUser($id: ID!) {
  getPostUser(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPostUserQueryVariables,
  APITypes.GetPostUserQuery
>;
export const listPostUsers = /* GraphQL */ `query ListPostUsers(
  $filter: ModelPostUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPostUsersQueryVariables,
  APITypes.ListPostUsersQuery
>;
export const postUsersByPostId = /* GraphQL */ `query PostUsersByPostId(
  $postId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostUserFilterInput
  $limit: Int
  $nextToken: String
) {
  postUsersByPostId(
    postId: $postId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostUsersByPostIdQueryVariables,
  APITypes.PostUsersByPostIdQuery
>;
export const postUsersByUserId = /* GraphQL */ `query PostUsersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostUserFilterInput
  $limit: Int
  $nextToken: String
) {
  postUsersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostUsersByUserIdQueryVariables,
  APITypes.PostUsersByUserIdQuery
>;
