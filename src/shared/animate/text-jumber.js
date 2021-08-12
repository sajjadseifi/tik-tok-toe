import React, { useEffect, useState } from "react" 
import { useRef } from "react";
import { StyleSheet, Animated } from "react-native";

const TextJumber  =({text=""})=>{
      const [state,setState]=useState("");
      const jumber = useRef(new Animated.Value(1)).current;
      const orginal = useRef(new Animated.Value(1)).current;

      useEffect(()=>{
         if(state.toString()  == text.toString()) return;
         setState(text.toString())

         startCahnge();
      },[text])
      const startCahnge=()=>{

      };
      return(
          <View>
            <Animated.Text style={styles.jumber}>{state}</Animated.Text>
            <Animated.Text style={styles.orginal}>{text}</Animated.Text>
         </View>
      )
};

const  styles = StyleSheet.create({
   jumber:{

   },
   orginal:{

   },
})