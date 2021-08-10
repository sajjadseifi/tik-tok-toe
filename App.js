import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { GlobalProvider } from './src/context/global-context'
import {GamePlayScreen} from "./src/screens/gameplay-screen"
import { Backdrop } from './src/shared/backdrop/backdrop'


export default function App() {
  return (
    <GlobalProvider>
      <Backdrop>
        <View style={styles.container}>
          <GamePlayScreen/>
          <StatusBar style="dark" />
        </View>
      </Backdrop>
    </GlobalProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})
