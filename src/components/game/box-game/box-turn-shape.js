import React,{ useEffect,useState } from "react";
import { StyleSheet, View } from "react-native";
import { useGamePlaySeletor } from "../../../hook/game-hook";
import { useGlobalSeletor } from "../../../hook/global-hook";
import { Thinking } from "../../shared/thinking";


export const TurnShape = ({})=>{
   const [show,setShow]=useState(false);
   const [timer,setTimer]=useState(null);
   
   const {currentPlayer ,board,endRound} = useGamePlaySeletor(state=>state);
   const thisnking = useGlobalSeletor(state=>state.app.screen.game.thisnking);

   useEffect(()=>{
      if(currentPlayer) startTiming();
   },[currentPlayer,endRound])
   
   const startTiming =()=>{
      clearTiming();
      if(endRound) return;

      const tim= setTimeout(()=>setShow(true),thisnking.thinkTime);
      setTimer(tim);
   };
   const clearTiming=()=>{
      if(timer) 
         clearTimeout(timer);
      setShow(false);
   };

   if(!currentPlayer || !board)   return null;

   const Shape = currentPlayer.shape;
   
   return (
      <View  style={styles.container}>
         <Shape play={false} color={currentPlayer.color} coefficient={3/2} />
         {show && <Thinking  style={styles.thinking} turn jump />}
      </View>
   )
};

const styles = StyleSheet.create({
   container:{
      justifyContent:"center",
      alignContent:"center",
      height:110,
   },
   thinking:{
      transform:[
         {translateY:-100}
      ]
   }, 
})

