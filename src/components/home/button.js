import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons"
import { color } from "../../constants";
import { APP_WIDTH } from "../../constants/size";
import { updateObject } from "../../utils";

export const HomeButton =({
   title,
   color,
   Icon=Ionicons,
   iconName,
   onPress=()=>{}
})=>{
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

const styles = StyleSheet.create({
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
})