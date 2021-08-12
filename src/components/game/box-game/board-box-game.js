import React from "react"
import { StyleSheet } from "react-native";
import { BORDER } from "../../../constants/size";
import { useGamePlaySeletor } from "../../../hook/game-hook";
import { Card } from "../../../shared";
import { updateObject } from "../../../utils";
import { Board } from "../../shared/board";
import { BoardRender } from "./board-render";

export  const BoardBoxGame=({size})=>{
   const state = useGamePlaySeletor(state=>state);
   const {board} = state;
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
               render={BoardRender}
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