import React from "react"
import {StyleSheet, View} from "react-native"
import { useState } from "react/cjs/react.development";
import { BoardBoxGame } from "./board-box-game";
import { TurnShape } from "./box-turn-shape";

export const ContainerBoxGame=()=>{
   const [size,setSize] =useState(0);
   const [dimensions,setDimensions] =useState(undefined)
   const  onLayout = event => {
      if (dimensions) return // layout was already called
      let { width, height } = event.nativeEvent.layout
      setDimensions({width, height})
      setSize(width);
    }

   return(
       <View onLayout={onLayout} style={styles.container}>
            <TurnShape/>
            <View style={styles.tiktoktoe}>
               <BoardBoxGame size={size} />
            </View>
      </View>
   )
};
const styles = StyleSheet.create({
   container:{
      flex:1,
      justifyContent:"center"
   },
   tiktoktoe:{

   }
})
