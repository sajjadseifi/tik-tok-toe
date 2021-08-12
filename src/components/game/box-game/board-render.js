import React from "react";
import { useGamePlaySeletor } from "../../../hook/game-hook";
import { PlacePlayer } from "../../player/place-player";
import { PlaceBoardView } from "./place-board-view";

export const BoardRender =({row,col})=>{
   const {board} = useGamePlaySeletor(state=>state);
   const place = board.places[row][col];

   return (
      <PlaceBoardView place={place}>
         <PlacePlayer board={board} place={place} />
      </PlaceBoardView>
      )
};
