import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Ex12Screen() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 1, backgroundColor: '#50E3C2' }}></View>
      <View style={{ flex: 1, backgroundColor: '#4A90E2' }}></View>
      <View style={{ flex: 1, backgroundColor: '#9013FE' }}></View>
    </View>
  );
}
