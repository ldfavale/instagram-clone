import React from 'react'
import posts from '../assets/data/data.json';
import Post from '../components/Post';
import { FlatList } from 'react-native';

export default function HomeScreen() {
  return (
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post key={item.id} post={item} />}
        showsVerticalScrollIndicator={false}
      />
  );
}
