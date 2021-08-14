import React,{ useRef,useEffect} from "react";
import { Animated } from "react-native";
import { StyleSheet, View } from "react-native";
import { color } from "../../constants";
import { audios } from "../../helpers/loader/sounds-loader";
import { useGlobalSeletor } from "../../hook/global-hook";
import { SoundPlayer } from "../../models/sounds-player";
import { ScaleAnimate } from "../../shared/animate";
import {  animateTiming } from "../../utils/animate";

const qusScales = [
   {x:0,y:0},
   {x:0.8,y:1.6,duration:200},
   {x:1.6,y:0.9,duration:250},
   {x:1,y:1,duration:300},
]

export const Thinking = ({style={},jump,turn,audio=audios.NOTIFICATION})=>{
   const thisnking = useGlobalSeletor(state=>state.app.screen.game.thisnking);
   const move = useRef(new Animated.Value(0)).current;
   const rotate = useRef(new Animated.Value(0)).current;

   useEffect(()=>{
      startThinking();
      return ()=>endThinking()
   },[]);

   const startThinking=()=>{
      moveAnimate();
      rotateAnimate();
      SoundPlayer.playSound(audio);
   }
   const endThinking=()=>{
      Animated.timing(move).stop();
      Animated.timing(rotate).stop();
   };
   const moveAnimate = () => {
      const { up :u, down:d }=thisnking.move;
      const up = ()=> animateTiming(move,u.value,u.duration,down);
      const down = ()=> animateTiming(move,d.value,d.duration,up);
      Animated.timing(move).stop();
      up();
   }  
   const rotateAnimate = ()=>{
      const { value,duration }=thisnking.turning;
      const turning = ()=> animateTiming(rotate,value,duration,zero);
      const zero = ()=>animateTiming(rotate,0,0,turning);
      Animated.timing(rotate).stop();
      turning();
   };

   const turnInp = rotate.interpolate({
      inputRange:[0,1],
      outputRange:["0deg","360deg"]
   })

   const transform = [];
   if(jump) transform.push({translateY: move })

   if(turn) transform.push({rotateY:turnInp })
   
   return (
      <ScaleAnimate scales={qusScales}>
         <View style={[styles.thinkingContainer,style]}>
            <Animated.Text style={[styles.thinking,{transform}]}>?</Animated.Text>
         </View>
      </ScaleAnimate>
   )
};

const styles = StyleSheet.create({
   thinkingContainer:{
      justifyContent:'center',
      alignItems:"center",
      height:0,
      transform:[
         {rotateX:"-45deg"},
         {rotateY:"50deg"},
         {scaleY:1.8},
         {scaleX:1.4},
      ],
      position:"relative",
      zIndex:500,
   },
   thinking:{
      fontWeight:"bold",
      color:color.white,
      fontSize:80,  
   }
})

