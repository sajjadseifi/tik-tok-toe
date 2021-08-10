import React from "react";
import { useRef,useEffect } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { updateObject } from "../utils";

export const Modal =({})=>{
   const top = useRef(new Animated.Value(0)).current;
   const left = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      rightFc();
    }, []);
    const anim =(pos,to,next=()=>{})=>{
      Animated.timing(pos, {
         toValue: to,
         duration: 1000,
         // useNativeDriver: true,
         useNativeDriver: false,
      }).start(next);
    }

    const topFc =()=>anim(top,0,rightFc)
    const leftFc =()=>anim(left,0,topFc)
   const bottomFc =()=>anim(top,100,leftFc)
   const rightFc =()=>anim(left,100,bottomFc)

    const opacity = top.interpolate({
      inputRange: [0, 100],
      outputRange: [0 , 1],
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
   })

   const animStyle = updateObject(styles.container,{
      transform: [
         {translateY:top},
         {translateX:left},
         {
            rotate: left.interpolate({
               inputRange: [0, 100],
               outputRange: ['0deg', '360deg'],
             })
         }
      ],
      opacity: opacity,
      backgroundColor: left.interpolate({
         inputRange: [0, 50, 100],
         outputRange: ['orange', 'blue','orange'],
       }),
   }) 
   
   return (
      <View style={styles.modal}>
             <Animated.View style={animStyle} />
      </View>
   )
};

const styles = StyleSheet.create({
   modal:{
      position:"absolute",
      left:0,
      top:0,
      width:"100%",
      height:"100%",
      zIndex:20,
      backgroundColor:"red",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   container: {
      width: 100,
      height: 100,
      backgroundColor: 'orange',
    }
})