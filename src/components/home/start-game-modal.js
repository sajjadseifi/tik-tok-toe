import React from "react";
import { View,StyleSheet } from "react-native";
import { APP_WIDTH } from "../../constants/size";
import { WhiteWindow } from "../../shared/ui/white-window";
import { HomeButton } from "./button";
import { useGlobalSeletor } from "../../hook/global-hook";
import { color } from "../../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ExplosiveModal } from "../../shared/modal/explosive-modal";
import { DegreeGame } from "../shared/degree-game";

const MODAL_WIDTH = APP_WIDTH * 7/8;

export const StartModalGame =({
   onSinglePlay=()=>{},
   onTwoPlay=()=>{},
   onOnlinePlay=()=>{},
   onClosed=()=>{}
})=>{
   
   const {statGameModal :startModalDetail} = 
      useGlobalSeletor(state=>state.messages.screens.home);
   
   const {statGameModal :startModalIcon} =
      useGlobalSeletor(state=>state.icon.screens.home);

   return(
      <ExplosiveModal speed={1.5}  width={MODAL_WIDTH}>
         <WhiteWindow >
            <View style={styles.startmodal}>
            <DegreeGame onPress={onSinglePlay}>
               <HomeButton 
                  title={startModalDetail.singlePlayer}
                  iconName={startModalIcon.singlePlayer}
                  color={color.lightblue}
                  Icon={MaterialCommunityIcons}
               />   
               </DegreeGame>
                  <HomeButton 
                     title={startModalDetail.twoPlayer}
                     iconName={startModalIcon.twoPlayer}
                     color={color.darkpurple}
                     Icon={FontAwesome5}
                     onPress={onTwoPlay}
                  />   
               <HomeButton 
                  title={startModalDetail.online}
                  iconName={startModalIcon.online}
                  color={color.darkbeautiful}
                  Icon={MaterialIcons}
                  onPress={onOnlinePlay}
               />   
               <HomeButton 
                  title={startModalDetail.close}
                  iconName={startModalIcon.close}
                  color={color.red}
                  Icon={Ionicons}
                  onPress={onClosed}
               />   
            </View>
         </WhiteWindow>
      </ExplosiveModal>
   )
};


const styles = StyleSheet.create({
   startmodal:{
      alignItems:"center",  
      justifyContent:"center"   ,
      paddingVertical:20,
   }
});
