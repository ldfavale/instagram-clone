import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

export type UserProfileRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'UserProfile'
>;

// Auth Stack Navigator
export type AuthStackNavigatorParamList = {
  'Sign in': undefined;
  'Sign up': undefined;
  'Confirm email': {username?: string};
  'Forgot password': undefined;
  'New password': undefined;
};

export type SignInNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign in'
>;

export type SignUpNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign up'
>;

export type ConfirmEmailNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Confirm email'
>;
export type ConfirmEmailRouteProp = RouteProp<
  AuthStackNavigatorParamList,
  'Confirm email'
>;

export type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Forgot password'
>;

export type NewPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'New password'
>;


export type RootNavigatorParamList = {
  Home: undefined;
  Comments: { postId: string };
  Auth: undefined;
  EditProfile: undefined;
};
export type BottomTabNavigatorParamList = {
  HomeStack: undefined;
  Search: undefined;
  Upload: undefined;
  Notifications: undefined;
  MyProfile: { userId: string };
};
export type SearchTabNavigatorParamList = {
  User: undefined;
  Post: undefined;
};

export type MyProfileNavigationProp = BottomTabNavigationProp<BottomTabNavigatorParamList, 'MyProfile'>
export type MyProfileRouteProp = RouteProp<BottomTabNavigatorParamList, 'MyProfile'>

export type HomeStackNavigatorParamList = {
  Feed: undefined;
  PostLikes: {id: string};
  UserProfile: { userId: string };
  EditPost: { postId: string}
};

export type PostLikesRouteProp = RouteProp<HomeStackNavigatorParamList, 'PostLikes'>;
export type UserProfileNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'UserProfile'>
export type FeedNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'Feed'>
export type EditPostNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'EditPost'>
export type EditPostRouteProp = RouteProp<HomeStackNavigatorParamList, 'EditPost'>

export type ProfileStackNavigatorParamList = {
  Profile: undefined;
  EditProfile: undefined;
};
export type CreatePostStackNavigatorParamList = {
  Camera: undefined;
  Create: {
    image?: string
    images?: string[]
    video?: string
  };
};

export type ProfileNavigationProp = NativeStackNavigationProp<ProfileStackNavigatorParamList, 'Profile'>
export type ProfileRouteProp = RouteProp<ProfileStackNavigatorParamList, 'Profile'>

export type CreatePostNavigationProp = NativeStackNavigationProp<CreatePostStackNavigatorParamList, 'Create'>
export type CreatePostRouteProp = RouteProp<CreatePostStackNavigatorParamList, 'Create'>


