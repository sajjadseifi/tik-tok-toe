import React, { useEffect } from "react";
import { StyleSheet,View } from "react-native";
import { SoundPlayer } from "../../models/sounds-player";
import { OpacityAnimate } from "../../shared/animate";
import { ScaleAnimate } from "../../shared/animate/scale-animate";

const jumAnimate = [
   {x:0 , y:0},
   {x:1.15 , y:1.15,duration:60},
   {x:0.95 , y:0.95,duration:70},
   {x:1 , y:1,duration:100},
]
export const BaseShape=({
   play=false,
   audio=null,
   wrapper=OpacityAnimate,
   children,
})=>{

   useEffect(()=>{
      if(audio && play) SoundPlayer.playSound(audio)
   },[audio,play])

   const Wrapper =wrapper;
   
   return(
      <Wrapper style={styles.opacityWrapper}>
         <ScaleAnimate scales={jumAnimate}>
            <View style={styles.base}>
               {children}
            </View>
         </ScaleAnimate>
    </Wrapper>
   )
};

const styles = StyleSheet.create({
   opacityWrapper: {
   },
   base:{
      alignItems:"center",
      justifyContent:"center",
   }
})