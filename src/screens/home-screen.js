import React from "react";
import  { StyleSheet, View,BackHandler, Pressable} from "react-native";
import { Button } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import color from "../constants/color";
import { APP_WIDTH } from "../constants/size";
import { useBackdropDispatch } from "../shared/backdrop/backdrop-hook";
import { ConfirmModal } from "../shared/modal/confirm-modal";
import * as bkActions  from "../shared/backdrop/backdrop-action"
import * as globActions  from "../store/actions/global-actions"
import { useGlobalDispatch, useGlobalSeletor } from "../hook/global-hook";
import { Exit } from "../components/shared/exit";

const HomeButton =({title,color="blue",Icon,iconName,onPress=()=>{}})=>{
   const  buttonStyle ={
      backgroundColor:color,
      borderRadius:10,
      paddingHorizontal:15,
   }
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
   const {startGame,exitApp} = useGlobalSeletor(state=>state.messages.screens.home);
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
      <View>
         <View style={styles.buttonGroup}>
            <HomeButton 
               title={startGame}
               iconName={homeIcon.startGame}
               color={color.black}
               Icon={FontAwesome}
               onPress={goToGame}
            />
            <Exit force>
               <HomeButton 
                  title={exitApp}
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
   },
   homeButton:{
      width:APP_WIDTH * 2/3 ,
      marginVertical:10,
   },
   homeBtnTitle:{
      flex:1,
      fontSize:24,
      fontWeight:"bold",
   },
   icon:{
      color:color.white,
   }
});
