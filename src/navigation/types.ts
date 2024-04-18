import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

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
  UserProfile: { userId: string };
};

export type UserProfileNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'UserProfile'>
export type FeedNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'Feed'>

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