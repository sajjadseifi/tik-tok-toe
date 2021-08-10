import React from "react"
import { StyleSheet } from "react-native";
import { BORDER } from "../../../constants/size";
import { useGamePlaySeletor } from "../../../hook/game-hook";
import { Card } from "../../../shared";
import { updateObject } from "../../../utils";
import { PlacePlayer } from "../../player/place-player";
import { Board } from "../../shared/board";
import { PlaceBoardView } from "./place-board-view";

export  const BoardBoxGame=({size})=>{
   const board = useGamePlaySeletor(state=>state.board);
   const conainerStyle = updateObject(styles.conainer,{
      width:size,
      height:size
   });

   return (
      <Card dashed style={conainerStyle}>
         {board && (  
            <Board
               cols={board.cols}
               rows={board.rows}
               render={({row,col})=>{
                  const place = board.getPlace(row,col);
                  return (
                     <PlaceBoardView place={place}>
                        <PlacePlayer board={board} place={place} />
                     </PlaceBoardView>
               )}}
            />
         )}
      </Card>  
   )
};

const styles = StyleSheet.create({
      conainer:{
         // padding:8,
         borderWidth:BORDER
      },
      baord:{
         flexDirection:"column",
         flexWrap:"wrap",
         flex:1,
      },
      baordRow:{
         width:"100%",
         height:"100%",
         flex:1,
      }
})