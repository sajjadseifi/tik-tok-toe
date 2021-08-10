import { StyleSheet } from "react-native";
import { color } from "../constants";
import { APP_HEIGTH, APP_WIDTH } from "../constants/size";

const styles = StyleSheet.create({
   fullScreen:{
      position:"absolute",
      top:0,
      left:0,
      width:APP_WIDTH,
      height:APP_HEIGTH,
   }, 
   centerPoint:{
      alignItems:"center",
      justifyContent:"center"
   },
   whiteWindow:{
      backgroundColor:color.white,
      borderRadius:5
   }
});

export  default styles