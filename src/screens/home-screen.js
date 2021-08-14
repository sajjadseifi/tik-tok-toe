import React from "react";
import  { StyleSheet, View} from "react-native";
import { Button } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import color from "../constants/color";
import { APP_WIDTH } from "../constants/size";
import * as globActions  from "../store/actions/global-actions"
import { useGlobalDispatch, useGlobalSeletor } from "../hook/global-hook";
import { Exit } from "../components/shared/exit";
import { LanguageChanger } from "../components/shared/language-changer";
import { updateObject } from "../utils";

const HomeButton =({title,color="blue",Icon,iconName,onPress=()=>{}})=>{
   const  buttonStyle = updateObject(styles.buttonStyle,{
      backgroundColor:color
   });
   const icon =(
         <Icon
            style={styles.icon}
            color={color.white}
            name={iconName}
            size={30}
         />
   )
   return (
         <Button 
            onPress={onPress}
            containerStyle={styles.homeButton}
            buttonStyle={buttonStyle}
            titleStyle={styles.homeBtnTitle}
            title={title}
            icon={icon}
         />
   )  
}
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
      colors={[color.gold,color.orange]} >
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>   
         <View style={styles.buttonGroup}>
            <HomeButton 
               title={homeDetail.startGame}
               iconName={homeIcon.startGame}
               color={color.black}
               Icon={FontAwesome}
               onPress={goToGame}
            />
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
   homeButton:{
      width:APP_WIDTH * 3/4 ,
      marginVertical:10,
   },
   homeBtnTitle:{
      flex:1,
      fontSize:22,
   },
   icon:{
      color:color.white,
   },
   buttonStyle:{
      borderRadius:10,
      paddingHorizontal:15,
      height:56,
   }
});
