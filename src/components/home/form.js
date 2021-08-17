import React from "react";
import { StyleSheet, View } from "react-native";
import { Exit } from "../shared/exit";
import { LanguageChanger } from "../shared/language-changer";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import { color } from "../../constants";
import { HomeButton } from "./button";
import { StartGame } from "../shared/start-game";

export const FormHome =({homeDetail,homeIcon})=>{
   return (
      <View style={styles.buttonGroup}>
         <StartGame>
            <HomeButton 
               title={homeDetail.startGame}
               iconName={homeIcon.startGame}
               color={color.black}
               Icon={FontAwesome}
            />
      </StartGame>
      <LanguageChanger>
         <HomeButton 
            title={homeDetail.changeLanguage}
            iconName={homeIcon.changeLanguage}
            color={color.red}
            Icon={Ionicons}
         />           
      </LanguageChanger>
      <Exit force>
         <HomeButton 
            title={homeDetail.exitApp}
            iconName={homeIcon.exitApp}
            color={color.rebeccapurple}
            Icon={Ionicons}
         />
      </Exit>
   </View>
   );
};

const styles = StyleSheet.create({
   buttonGroup:{

   }
})