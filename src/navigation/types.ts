import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

export type RootNevigatorParamList = {
  Home: undefined;
  Comments: { postId: string };
};
export type BottomTabNavigatorParamList = {
  HomeStack: undefined;
  Search: undefined;
  Upload: undefined;
  Notifications: undefined;
  MyProfile: { userId: string };
};

export type MyProfileNavigationProp = BottomTabNavigationProp<BottomTabNavigatorParamList,'MyProfile'>
export type MyProfileRouteProp = RouteProp<BottomTabNavigatorParamList,'MyProfile'>

export type HomeStackNavigatorParamList = {
  Feed: undefined;
  UserProfile: { userId: string };
};

export type UserProfileNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList,'UserProfile'>
export type FeedNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList,'Feed'>

export type ProfileStackNavigatorParamList = {
  Profile: undefined;
  EditProfile: undefined;
};

export type ProfileNavigationProp = NativeStackNavigationProp<ProfileStackNavigatorParamList,'Profile'>
export type ProfileRouteProp = RouteProp<ProfileStackNavigatorParamList,'Profile'>
