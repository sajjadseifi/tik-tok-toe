import React, { useState } from "react" 
import { View } from "react-native";
import { StyleSheet, Animated } from "react-native";
import { ScaleAnimate } from "./scale-animate";

const textJ = [
   {x:1,y:1},
   {x:1,y:3,duration:50},
   {x:1.6,y:1,duration:50},
   {x:1,y:1,duration:50},
];
export const TextJumber  =({style={},defaultValue ="",text=""})=>{
      const [state,setState]=useState(defaultValue);
      
      const checkShow=()=> !(state.toString()  == text.toString())

      return(
          <View style={styles.container}>
            <ScaleAnimate afterAnimated={()=>setState(text.toString())} scales={textJ} show={checkShow}  >
               <Animated.Text style={[styles.same,styles.orginal,style]}>{state}</Animated.Text>
            </ScaleAnimate>
         </View>
      )
};

const  styles = StyleSheet.create({
   container:{
      overflow:"hidden",
   },
   jumber:{
      position:"absolute",
   },
})