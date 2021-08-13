import React from 'react'
import AppLoading from "expo-app-loading"
import { StatusBar } from 'expo-status-bar'
import { useEffect } from "react"
import { StyleSheet, View } from 'react-native'
import { useState } from 'react/cjs/react.development'
import { GlobalProvider } from './src/context/global-context'
import { imageLoader } from "./src/helpers/loader/image-loader"
import { soundsLoader } from "./src/helpers/loader/sounds-loader"
import { SoundPlayer } from "./src/models/sounds-player"
import { Screens } from "./src/screens/screens"
import { Backdrop } from './src/shared/backdrop/backdrop'
// import * as Font from "expo-font"

const loadAssets  = ()=>{
  const files = soundsLoader();
  const sounds = SoundPlayer.load(files.sounds)
  return  Promise.all(sounds)
//   Font.loadAsync({
//     "dana-demibold":require("./src/assets/fonts/dana-demibold.ttf"),
//     "dana-extrabold":require("./src/assets/fonts/dana-extrabold.ttf"),
//     "dana-light":require("./src/assets/fonts/dana-light.ttf"),
//     "dana-medium":require("./src/assets/fonts/dana-medium.ttf"),
//     "dana-regular":require("./src/assets/fonts/dana-regular.ttf"),
//     "dana-thin":require("./src/assets/fonts/dana-thin.ttf"),
//     "dana-ultrabold":require("./src/assets/fonts/dana-ultrabold.ttf"),
// })
};
export default function App() {
  const [isReady,setIsReady]=useState(false);
 const [imageReady,setImageReady]=useState(false);
  
 if(!imageReady){
   imageLoader();
   setImageReady(true);
 }

  if(!isReady)
    return (
      <AppLoading
        startAsync={loadAssets}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
  );   
  return (
    <GlobalProvider page="start">
      <Backdrop>
        <View style={styles.container}>
          <Screens/>
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
