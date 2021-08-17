import React from "react";
import { Pressable, StyleSheet, View } from "react-native"
import { BORDER } from "../../constants/size";
import { useGamePlayDispatch, useGamePlaySeletor } from "../../hook/game-hook";
import { Place } from "../../models/place";
import * as t3Actions from "../../store/actions/tik-toc-toe";
import { updateObject } from "../../utils";
import { dirBoardCreator } from "../../utils/board";

export const PlacePlayer =({place= new Place()})=>{
   const {board,endRound,roboot} = useGamePlaySeletor(state=>state);
   const computed = dirBoardCreator(place.row,place.col,board.rows,board.cols,styles);   
   const placeplayerStyle = updateObject(styles.wrapper,computed);
   const currentPlayer = useGamePlaySeletor(state=>state.currentPlayer);
   const dispatch = useGamePlayDispatch();
   
   const  sitDowIt= () => dispatch(t3Actions.sitDownToPlace(currentPlayer,place));
   
   const Cmp = (place.exist || endRound || roboot) ? View:Pressable    
   
   const Shape =place.player? place.player.shape:null;

    return (
      <Cmp
         android_disableSound
         style={placeplayerStyle}
         onPress={sitDowIt} 
      >
         {Shape && (
            <View style={styles.sitedPlayer}>
               <Shape play={true}  color={place.player.color} />
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
      marginTop:BORDER_ADD_HALF,
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