import React from "react"
import { StyleSheet, View } from "react-native";
import { SwitchLanguage } from "../add-ones/switch-language";
import { Flex } from "../ui";
import { ExitButton } from "../add-ones/exit-button";
import { Seperator } from "../shared/seprator";
import { IconButton } from "../ui/icon-button";
import { color } from "../../constants";
import {useGamePlayDispatch } from "../../hook/game-hook";
import * as gameActions from "../../store/actions/game-action"
import { Reround } from "../shared/confirm/re-round";
import EvilIcons from "react-native-vector-icons/EvilIcons" 
import { ScaleButton } from "../../shared/ui/scale-button";
import { ReRoundButton } from "../add-ones/re-round-button";

export const NavbarHeader =({forceExit,dark=true})=>{
   const darkMode = dark?{}:{};
   const dispatch  = useGamePlayDispatch()
   
   const  reRoundGame = () => dispatch(gameActions.reRound());
   
   return (
      <View style={[styles.nav,darkMode]}>
         <Flex between alignCenter>
            <View style={styles.formleft}>
                  <SwitchLanguage  />
            </View>
            <View style={styles.formRight}>
               <ReRoundButton/>
               <Seperator space={6}/>
               <ExitButton force={forceExit} />
            </View>
         </Flex>
      </View>
   )
};

const styles = StyleSheet.create({
   nav:{
      width:"100%",
      // backgroundColor:"red",
   },
   dark:{
      backgroundColor:"#2f2f2f",
      paddingVertical:5,
      paddingHorizontal:20,
      borderRadius:8
   },
   formleft:{
   },
   formRight:{
      flexDirection:"row",
      alignItems:"center",
   },
}) 