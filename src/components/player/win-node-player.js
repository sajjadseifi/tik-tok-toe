import React from "react";
import { View } from "react-native";
import {StyleSheet} from "react-native"
import { color } from "../../constants";
import { OpacityAnimate } from "../../shared/animate";
import { ScaleAnimate } from "../../shared/animate/scale-animate";
import { ifExistenceComing, updateObject } from "../../utils";

const ball = [
   {x:0,y:0},
   {x:1.6,y:0.6,duration:40},
   {x:0.6,y:1.4,duration:50},
   {x:1,y:1,duration:60},
]

export const WinNodePlayer =({style,color})=>{

   let turnStyle = updateObject(styles.win,style)
   turnStyle = ifExistenceComing(turnStyle,{ backgroundColor:color   });

   return (
      <OpacityAnimate from={0.7} to={1} >
         <ScaleAnimate scales={ball}>
            <View  style={turnStyle}></View>
         </ScaleAnimate> 
      </OpacityAnimate>  
   )
};

const styles = StyleSheet.create({
   win:{
      backgroundColor:color.white,
      borderRadius:16,
      width:16,
      height:16,
      opacity:1,
   }
})