import React  from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { BORDER } from "../../constants/size";
import { useTikTokToeSeletor } from "../../hook/tiktoktoe-hook";
import { Place } from "../../models/place";
import { TikTokToe } from "../../models/ticktoktoe";
import { updateObject } from "../../utils";
import { dirBoardCreator } from "../../utils/board";

export const PlacePlayer =({board = new TikTokToe(),place= new Place()})=>{
   const Cmp = place.exist ? View:TouchableOpacity
   const computed = dirBoardCreator(place.row,place.col,board.rows,board.cols,styles);   
   const placeplayerStyle = updateObject(styles.wrapper,computed);

   const sitDowIt=()=>{
      console.log("SAJJAD")
   }
   return (
         <TouchableOpacity  style={placeplayerStyle} onPress={sitDowIt}></TouchableOpacity>
   )
}

const BORDER_ADD_HALF = BORDER; 
const styles = StyleSheet.create({
   wrapper:{
      flex:1,
      margin:0,
      backgroundColor:"green",
   },
   top:{ 
      marginTop:BORDER_ADD_HALF ,
   },
   right:{ 
      marginRight:BORDER_ADD_HALF,
   },
   bottom:{
      marginBottom:BORDER_ADD_HALF,
      },
   left:{
      marginLeft:BORDER_ADD_HALF,
   }
});