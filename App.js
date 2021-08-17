import React ,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import AppLoading from "expo-app-loading"
import { Asset } from 'react-native-unimodules'
import { GlobalProvider } from './src/context/global-context'
import { Backdrop } from './src/shared/backdrop/backdrop'
import { Screens } from "./src/screens/screens"
import { SoundPlayer } from "./src/models/sounds-player"
import { imageLoader } from "./src/helpers/loader/image-loader"
import { soundsLoader } from "./src/helpers/loader/sounds-loader"

async function _cacheResourcesAsync() {
  const sounds = []// SoundPlayer.load(soundsLoader())
  const images =  imageLoader();

  const cacheImages = images.map(image => {
    return Asset.fromModule(image).downloadAsync();
  }); 
  return Promise.all([...cacheImages,...sounds]);
}

export default function App() {
  const [isReady,setIsReady]=useState(false);
  
  if(!isReady)
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}>
         <View style={{flex:1,alignItems:"center",justifyContent:"center" }}>
          <Text>LAODING...</Text>
         </View>
        </AppLoading>
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
