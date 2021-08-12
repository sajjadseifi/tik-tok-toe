import AppLoading from "expo-app-loading"
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useState } from 'react/cjs/react.development'
import { GlobalProvider } from './src/context/global-context'
import { loader } from "./src/helpers/loader/loader"
import { SoundPlayer } from "./src/models/sounds-player"
import {GamePlayScreen} from "./src/screens/gameplay-screen"
import { Backdrop } from './src/shared/backdrop/backdrop'

const loadAssets  = ()=>{
  const files = loader();
  const sounds = SoundPlayer.load(files.sounds)
  
  return Promise.all([
    // Font.loadAsync(files.fonts),
    ...sounds
  ])
};
export default function App() {
  const [isReady,setIsReady]=useState(false);
  
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAssets}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    ); 
  }
  
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
