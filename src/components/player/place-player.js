import React,{ useState } from "react";
import {  StyleSheet,  TouchableOpacity, View } from "react-native"
import { BORDER } from "../../constants/size";
import { useGamePlayDispatch, useGamePlaySeletor } from "../../hook/game-hook";
import { Place } from "../../models/place";
import * as t3Actions from "../../store/actions/tik-toc-toe";
import { updateObject } from "../../utils";
import { dirBoardCreator } from "../../utils/board";

export const PlacePlayer =({place= new Place()})=>{

   const dispatch = useGamePlayDispatch();
   const {board,endRound} = useGamePlaySeletor(state=>state);
   const computed = dirBoardCreator(place.row,place.col,board.rows,board.cols,styles);   
   const placeplayerStyle = updateObject(styles.wrapper,computed);
   const currentPlayer = useGamePlaySeletor(state=>state.currentPlayer);
   const Cmp = (place.exist || endRound) ? View:TouchableOpacity    
   const Shape =place.player? place.player.shape:null;
   
   const  sitDowIt= () => dispatch(t3Actions.sitDownToPlace(currentPlayer,place));

    return (
         <Cmp
            activeOpacity={0.85}
            style={placeplayerStyle}
            onPress={sitDowIt}
         >
         {place.player && (
            <View style={styles.sitedPlayer}>
               <Shape useAnim={place.useAnimate}  color={place.player.color} size={10} />
            </View>
         )}
         </Cmp>
   )
}

const BORDER_ADD_HALF = BORDER; 
const styles = StyleSheet.create({
   sitedPlayer:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
   },
   wrapper:{
      flex:1,
      margin:0,
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