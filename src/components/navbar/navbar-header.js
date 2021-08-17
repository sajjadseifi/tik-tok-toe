import React from "react"
import { StyleSheet, View } from "react-native";
import { SwitchLanguage } from "../add-ones/switch-language";
import { Flex } from "../ui";
import { ExitButton } from "../add-ones/exit-button";
import { Seperator } from "../shared/seprator";
import {useGamePlayDispatch, useGamePlaySeletor } from "../../hook/game-hook";
import * as gameActions from "../../store/actions/game-action"
import { ReRoundButton } from "../add-ones/re-round-button";
import { ChangeLevelButton } from "../add-ones/change-level-button";
import { statesGamePlay } from "../../constants/app";

export const NavbarHeader =({forceExit,dark=true})=>{
   const playState = useGamePlaySeletor(state=>state.playState);
   const dispatch  = useGamePlayDispatch()
   const darkMode = dark?{}:{};
   
   const  reRoundGame = () => dispatch(gameActions.reRound());
   const isRoboot = playState == statesGamePlay.single;
   return (
      <View style={[styles.nav,darkMode]}>
         <Flex between alignCenter>
            <View style={styles.formleft}>
                  <SwitchLanguage  />
            </View>
            <View style={styles.formRight}>
               {isRoboot && <ChangeLevelButton />}
               <Seperator space={6}/>
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