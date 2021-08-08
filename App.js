import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import {GamePlayScreen} from "./src/screens/gameplay-screen"

export default function App() {
  return (
    <View style={styles.container}>
      <GamePlayScreen/>
      <StatusBar style="dark" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})
