import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function Home() {
  return (
   <View className="flex-1 items-center justify-center bg-red">
      <Text className="font-bold tracking-wider">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
