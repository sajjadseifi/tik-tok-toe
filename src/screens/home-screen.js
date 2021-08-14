import React from "react";
import  { StyleSheet, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import color from "../constants/color";
import { APP_WIDTH } from "../constants/size";
import * as globActions  from "../store/actions/global-actions"
import { useGlobalDispatch, useGlobalSeletor } from "../hook/global-hook";
import { Seperator } from "../components/shared/seprator";
import { HomeLogo } from "../components/home/logo";
import { FormHome } from "../components/home/form";

export const HomeScreen = ({})=>{
   const homeDetail = useGlobalSeletor(state=>state.messages.screens.home);
   const homeIcon = useGlobalSeletor(state=>state.icon.screens.home);
   const dispatchGlobal = useGlobalDispatch();
   const goToGame=()=>dispatchGlobal(globActions.changePage("game"));

   return (
      <LinearGradient   
      start={{x: 0, y: 0}}  
      end={{x:1, y: 1}} 
      style={styles.home}  
      colors={[color.gold,color.orange]} 
      >
         <View style={styles.content}>   
            <HomeLogo  />
            <Seperator row={false} space={20}/>
            <FormHome {...{goToGame, homeIcon, homeDetail}}/>
         </View>
   </LinearGradient>
   )
};

const styles = StyleSheet.create({
   home:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      padding:20,
      paddingVertical:40,
   },
   content:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
   }
});
