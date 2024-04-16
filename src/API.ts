/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCommentInput = {
  id?: string | null,
  comment: string,
  userID: string,
  postID: string,
};

export type ModelCommentConditionInput = {
  comment?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  comment: string,
  userID: string,
  postID: string,
  User?: User | null,
  Post?: Post | null,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  image?: string | null,
  bio?: string | null,
  username?: string | null,
  website?: string | null,
  nofPosts: number,
  nofFollowers: number,
  nofFollowing: number,
  email: string,
  Posts?: ModelPostConnection | null,
  Comments?: ModelCommentConnection | null,
  LikedPosts?: ModelPostUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  description?: string | null,
  image?: string | null,
  images?: Array< string > | null,
  video?: string | null,
  nofComments: number,
  nofLikes: number,
  userID: string,
  User?: User | null,
  Likes?: ModelPostUserConnection | null,
  Comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostUserConnection = {
  __typename: "ModelPostUserConnection",
  items:  Array<PostUser | null >,
  nextToken?: string | null,
};

export type PostUser = {
  __typename: "PostUser",
  id: string,
  postId: string,
  userId: string,
  post: Post,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type UpdateCommentInput = {
  id: string,
  comment?: string | null,
  userID?: string | null,
  postID?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  description?: string | null,
  image?: string | null,
  images?: Array< string > | null,
  video?: string | null,
  nofComments: number,
  nofLikes: number,
  userID: string,
};

export type ModelPostConditionInput = {
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  video?: ModelStringInput | null,
  nofComments?: ModelIntInput | null,
  nofLikes?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePostInput = {
  id: string,
  description?: string | null,
  image?: string | null,
  images?: Array< string > | null,
  video?: string | null,
  nofComments?: number | null,
  nofLikes?: number | null,
  userID?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  image?: string | null,
  bio?: string | null,
  username?: string | null,
  website?: string | null,
  nofPosts: number,
  nofFollowers: number,
  nofFollowing: number,
  email: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  username?: ModelStringInput | null,
  website?: ModelStringInput | null,
  nofPosts?: ModelIntInput | null,
  nofFollowers?: ModelIntInput | null,
  nofFollowing?: ModelIntInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  bio?: string | null,
  username?: string | null,
  website?: string | null,
  nofPosts?: number | null,
  nofFollowers?: number | null,
  nofFollowing?: number | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePostUserInput = {
  id?: string | null,
  postId: string,
  userId: string,
};

export type ModelPostUserConditionInput = {
  postId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelPostUserConditionInput | null > | null,
  or?: Array< ModelPostUserConditionInput | null > | null,
  not?: ModelPostUserConditionInput | null,
};

export type UpdatePostUserInput = {
  id: string,
  postId?: string | null,
  userId?: string | null,
};

export type DeletePostUserInput = {
  id: string,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  video?: ModelStringInput | null,
  nofComments?: ModelIntInput | null,
  nofLikes?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  username?: ModelStringInput | null,
  website?: ModelStringInput | null,
  nofPosts?: ModelIntInput | null,
  nofFollowers?: ModelIntInput | null,
  nofFollowing?: ModelIntInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelPostUserFilterInput = {
  id?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelPostUserFilterInput | null > | null,
  or?: Array< ModelPostUserFilterInput | null > | null,
  not?: ModelPostUserFilterInput | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  comment?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  postID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  video?: ModelSubscriptionStringInput | null,
  nofComments?: ModelSubscriptionIntInput | null,
  nofLikes?: ModelSubscriptionIntInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
  nofPosts?: ModelSubscriptionIntInput | null,
  nofFollowers?: ModelSubscriptionIntInput | null,
  nofFollowing?: ModelSubscriptionIntInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionPostUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostUserFilterInput | null > | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    comment: string,
    userID: string,
    postID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      images?: Array< string > | null,
      video?: string | null,
      nofComments: number,
      nofLikes: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Likes?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    comment: string,
    userID: string,
    postID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      images?: Array< string > | null,
      video?: string | null,
      nofComments: number,
      nofLikes: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Likes?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    comment: string,
    userID: string,
    postID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      images?: Array< string > | null,
      video?: string | null,
      nofComments: number,
      nofLikes: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Likes?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    image?: string | null,
    images?: Array< string > | null,
    video?: string | null,
    nofComments: number,
    nofLikes: number,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Likes?:  {
      __typename: "ModelPostUserConnection",
      items:  Array< {
        __typename: "PostUser",
        id: string,
        postId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    image?: string | null,
    images?: Array< string > | null,
    video?: string | null,
    nofComments: number,
    nofLikes: number,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Likes?:  {
      __typename: "ModelPostUserConnection",
      items:  Array< {
        __typename: "PostUser",
        id: string,
        postId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    image?: string | null,
    images?: Array< string > | null,
    video?: string | null,
    nofComments: number,
    nofLikes: number,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Likes?:  {
      __typename: "ModelPostUserConnection",
      items:  Array< {
        __typename: "PostUser",
        id: string,
        postId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    bio?: string | null,
    username?: string | null,
    website?: string | null,
    nofPosts: number,
    nofFollowers: number,
    nofFollowing: number,
    email: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        description?: string | null,
        image?: string | null,
        images?: Array< string > | null,
        video?: string | null,
        nofComments: number,
        nofLikes: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    LikedPosts?:  {
      __typename: "ModelPostUserConnection",
      items:  Array< {
        __typename: "PostUser",
        id: string,
        postId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    bio?: string | null,
    username?: string | null,
    website?: string | null,
    nofPosts: number,
    nofFollowers: number,
    nofFollowing: number,
    email: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        description?: string | null,
        image?: string | null,
        images?: Array< string > | null,
        video?: string | null,
        nofComments: number,
        nofLikes: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    LikedPosts?:  {
      __typename: "ModelPostUserConnection",
      items:  Array< {
        __typename: "PostUser",
        id: string,
        postId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    bio?: string | null,
    username?: string | null,
    website?: string | null,
    nofPosts: number,
    nofFollowers: number,
    nofFollowing: number,
    email: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        description?: string | null,
        image?: string | null,
        images?: Array< string > | null,
        video?: string | null,
        nofComments: number,
        nofLikes: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    LikedPosts?:  {
      __typename: "ModelPostUserConnection",
      items:  Array< {
        __typename: "PostUser",
        id: string,
        postId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostUserMutationVariables = {
  input: CreatePostUserInput,
  condition?: ModelPostUserConditionInput | null,
};

export type CreatePostUserMutation = {
  createPostUser?:  {
    __typename: "PostUser",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      images?: Array< string > | null,
      video?: string | null,
      nofComments: number,
      nofLikes: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Likes?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostUserMutationVariables = {
  input: UpdatePostUserInput,
  condition?: ModelPostUserConditionInput | null,
};

export type UpdatePostUserMutation = {
  updatePostUser?:  {
    __typename: "PostUser",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      images?: Array< string > | null,
      video?: string | null,
      nofComments: number,
      nofLikes: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Likes?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostUserMutationVariables = {
  input: DeletePostUserInput,
  condition?: ModelPostUserConditionInput | null,
};

export type DeletePostUserMutation = {
  deletePostUser?:  {
    __typename: "PostUser",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      images?: Array< string > | null,
      video?: string | null,
      nofComments: number,
      nofLikes: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Likes?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    comment: string,
    userID: string,
    postID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      images?: Array< string > | null,
      video?: string | null,
      nofComments: number,
      nofLikes: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Likes?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      comment: string,
      userID: string,
      postID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Post?:  {
        __typename: "Post",
        id: string,
        description?: string | null,
        image?: string | null,
        images?: Array< string > | null,
        video?: string | null,
        nofComments: number,
        nofLikes: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByUserIDQuery = {
  commentsByUserID?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      comment: string,
      userID: string,
      postID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Post?:  {
        __typename: "Post",
        id: string,
        description?: string | null,
        image?: string | null,
        images?: Array< string > | null,
        video?: string | null,
        nofComments: number,
        nofLikes: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByPostIDQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByPostIDQuery = {
  commentsByPostID?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      comment: string,
      userID: string,
      postID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Post?:  {
        __typename: "Post",
        id: string,
        description?: string | null,
        image?: string | null,
        images?: Array< string > | null,
        video?: string | null,
        nofComments: number,
        nofLikes: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    image?: string | null,
    images?: Array< string > | null,
    video?: string | null,
    nofComments: number,
    nofLikes: number,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Likes?:  {
      __typename: "ModelPostUserConnection",
      items:  Array< {
        __typename: "PostUser",
        id: string,
        postId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      images?: Array< string > | null,
      video?: string | null,
      nofComments: number,
      nofLikes: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Likes?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByUserIDQuery = {
  postsByUserID?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      images?: Array< string > | null,
      video?: string | null,
      nofComments: number,
      nofLikes: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Likes?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    bio?: string | null,
    username?: string | null,
    website?: string | null,
    nofPosts: number,
    nofFollowers: number,
    nofFollowing: number,
    email: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        description?: string | null,
        image?: string | null,
        images?: Array< string > | null,
        video?: string | null,
        nofComments: number,
        nofLikes: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    LikedPosts?:  {
      __typename: "ModelPostUserConnection",
      items:  Array< {
        __typename: "PostUser",
        id: string,
        postId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByUsernameQueryVariables = {
  username: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByUsernameQuery = {
  usersByUsername?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostUserQueryVariables = {
  id: string,
};

export type GetPostUserQuery = {
  getPostUser?:  {
    __typename: "PostUser",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      images?: Array< string > | null,
      video?: string | null,
      nofComments: number,
      nofLikes: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Likes?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostUsersQueryVariables = {
  filter?: ModelPostUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostUsersQuery = {
  listPostUsers?:  {
    __typename: "ModelPostUserConnection",
    items:  Array< {
      __typename: "PostUser",
      id: string,
      postId: string,
      userId: string,
      post:  {
        __typename: "Post",
        id: string,
        description?: string | null,
        image?: string | null,
        images?: Array< string > | null,
        video?: string | null,
        nofComments: number,
        nofLikes: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
      },
      user:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostUsersByPostIdQueryVariables = {
  postId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostUsersByPostIdQuery = {
  postUsersByPostId?:  {
    __typename: "ModelPostUserConnection",
    items:  Array< {
      __typename: "PostUser",
      id: string,
      postId: string,
      userId: string,
      post:  {
        __typename: "Post",
        id: string,
        description?: string | null,
        image?: string | null,
        images?: Array< string > | null,
        video?: string | null,
        nofComments: number,
        nofLikes: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
      },
      user:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostUsersByUserIdQuery = {
  postUsersByUserId?:  {
    __typename: "ModelPostUserConnection",
    items:  Array< {
      __typename: "PostUser",
      id: string,
      postId: string,
      userId: string,
      post:  {
        __typename: "Post",
        id: string,
        description?: string | null,
        image?: string | null,
        images?: Array< string > | null,
        video?: string | null,
        nofComments: number,
        nofLikes: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
      },
      user:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    comment: string,
    userID: string,
    postID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      images?: Array< string > | null,
      video?: string | null,
      nofComments: number,
      nofLikes: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Likes?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    comment: string,
    userID: string,
    postID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      images?: Array< string > | null,
      video?: string | null,
      nofComments: number,
      nofLikes: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Likes?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    comment: string,
    userID: string,
    postID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      images?: Array< string > | null,
      video?: string | null,
      nofComments: number,
      nofLikes: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Likes?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    image?: string | null,
    images?: Array< string > | null,
    video?: string | null,
    nofComments: number,
    nofLikes: number,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Likes?:  {
      __typename: "ModelPostUserConnection",
      items:  Array< {
        __typename: "PostUser",
        id: string,
        postId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    image?: string | null,
    images?: Array< string > | null,
    video?: string | null,
    nofComments: number,
    nofLikes: number,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Likes?:  {
      __typename: "ModelPostUserConnection",
      items:  Array< {
        __typename: "PostUser",
        id: string,
        postId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    image?: string | null,
    images?: Array< string > | null,
    video?: string | null,
    nofComments: number,
    nofLikes: number,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Likes?:  {
      __typename: "ModelPostUserConnection",
      items:  Array< {
        __typename: "PostUser",
        id: string,
        postId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    bio?: string | null,
    username?: string | null,
    website?: string | null,
    nofPosts: number,
    nofFollowers: number,
    nofFollowing: number,
    email: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        description?: string | null,
        image?: string | null,
        images?: Array< string > | null,
        video?: string | null,
        nofComments: number,
        nofLikes: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    LikedPosts?:  {
      __typename: "ModelPostUserConnection",
      items:  Array< {
        __typename: "PostUser",
        id: string,
        postId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    bio?: string | null,
    username?: string | null,
    website?: string | null,
    nofPosts: number,
    nofFollowers: number,
    nofFollowing: number,
    email: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        description?: string | null,
        image?: string | null,
        images?: Array< string > | null,
        video?: string | null,
        nofComments: number,
        nofLikes: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    LikedPosts?:  {
      __typename: "ModelPostUserConnection",
      items:  Array< {
        __typename: "PostUser",
        id: string,
        postId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    bio?: string | null,
    username?: string | null,
    website?: string | null,
    nofPosts: number,
    nofFollowers: number,
    nofFollowing: number,
    email: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        description?: string | null,
        image?: string | null,
        images?: Array< string > | null,
        video?: string | null,
        nofComments: number,
        nofLikes: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    LikedPosts?:  {
      __typename: "ModelPostUserConnection",
      items:  Array< {
        __typename: "PostUser",
        id: string,
        postId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostUserSubscriptionVariables = {
  filter?: ModelSubscriptionPostUserFilterInput | null,
};

export type OnCreatePostUserSubscription = {
  onCreatePostUser?:  {
    __typename: "PostUser",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      images?: Array< string > | null,
      video?: string | null,
      nofComments: number,
      nofLikes: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Likes?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostUserSubscriptionVariables = {
  filter?: ModelSubscriptionPostUserFilterInput | null,
};

export type OnUpdatePostUserSubscription = {
  onUpdatePostUser?:  {
    __typename: "PostUser",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      images?: Array< string > | null,
      video?: string | null,
      nofComments: number,
      nofLikes: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Likes?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostUserSubscriptionVariables = {
  filter?: ModelSubscriptionPostUserFilterInput | null,
};

export type OnDeletePostUserSubscription = {
  onDeletePostUser?:  {
    __typename: "PostUser",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      images?: Array< string > | null,
      video?: string | null,
      nofComments: number,
      nofLikes: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        bio?: string | null,
        username?: string | null,
        website?: string | null,
        nofPosts: number,
        nofFollowers: number,
        nofFollowing: number,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Likes?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio?: string | null,
      username?: string | null,
      website?: string | null,
      nofPosts: number,
      nofFollowers: number,
      nofFollowing: number,
      email: string,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      LikedPosts?:  {
        __typename: "ModelPostUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
