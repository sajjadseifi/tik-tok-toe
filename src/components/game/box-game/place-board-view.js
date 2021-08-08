import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { color } from "../../../constants";
import { BORDER } from "../../../constants/size";
import { useTikTokToeSeletor } from "../../../hook/tiktoktoe-hook";
import { Place } from "../../../models/place";
import { updateObject } from "../../../utils";
import { dirBoardCreator } from "../../../utils/board";

const HALF_BORDER = BORDER/2;

export const PlaceBoardView=({children,place = new Place()})=>{

   const board = useTikTokToeSeletor(state=>state.board);
   const computed1 = dirBoardCreator(place.row,place.col,board.rows,board.cols,styles); 
   const placeStyle =updateObject(styles.borderPlace,computed1);

   return (
      <View  style={styles.place}>
         <View style={styles.abs}>
            <View style={placeStyle}></View>
         </View>
         <View style={styles.abs}>
            {children}
         </View>
      </View>
   )
};


const styles = StyleSheet.create({
      abs:{
            position:"absolute",
            left:0,
            top:0,
            width:"100%",
            height:"100%",
      },
      place:{
         position:"relative",
         flex:1,
      },
      borderPlace:{
         flex:1,
         borderColor:color.white,
         borderStyle:"dashed",
         margin:10,
      },
      top:{ 
         borderTopWidth:HALF_BORDER ,
         marginTop:0,
      },
      right:{ 
         borderRightWidth:HALF_BORDER ,
         marginRight:0,
      },
      bottom:{
         borderBottomWidth:HALF_BORDER,
         marginBottom:0,
       },
      left:{
         borderLeftWidth:HALF_BORDER ,
         marginLeft:0,
      }
});   