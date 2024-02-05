import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Post from './src/components/Post';
import { posts } from './src/assets/data';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({item, index, separators}) => <Post key={item.id} post={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "white"
  },
});
