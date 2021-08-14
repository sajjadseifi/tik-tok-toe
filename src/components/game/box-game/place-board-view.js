import React from "react";
import { StyleSheet, View } from "react-native";
import { color } from "../../../constants";
import { BORDER } from "../../../constants/size";
import { useGamePlaySeletor } from "../../../hook/game-hook";
import { Place } from "../../../models/place";
import { updateObject } from "../../../utils";
import { dirBoardCreator } from "../../../utils/board";

const HALF_BORDER = BORDER/2;

export const PlaceBoardView=({children,place = new Place()})=>{

   const board = useGamePlaySeletor(state=>state.board);
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

const STATIC_MARGIN_BOARD=0
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
         borderColor:color.white,
         margin:10,
         flex:1,
      },
      top:{
         borderTopWidth:HALF_BORDER ,
         marginTop:STATIC_MARGIN_BOARD,
      },
      right:{ 
         borderRightWidth:HALF_BORDER ,
         marginRight:STATIC_MARGIN_BOARD,
      },
      bottom:{
         borderBottomWidth:HALF_BORDER,
         marginBottom:STATIC_MARGIN_BOARD,
       },
      left:{
         borderLeftWidth:HALF_BORDER ,
         marginLeft:STATIC_MARGIN_BOARD,
      }
});   