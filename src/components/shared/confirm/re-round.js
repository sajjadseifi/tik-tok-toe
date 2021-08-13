import React from "react";
import { useGamePlayDispatch } from "../../../hook/game-hook";
import { useGlobalSeletor } from "../../../hook/global-hook";
import { BaseConfirm } from "./base";
import * as gameActions from "../../../store/actions/game-action"
export const Reround =({style,children})=>{
   const {confirmed} = useGlobalSeletor(state=>state.messages.endRound);
   const dispatch = useGamePlayDispatch();
   const reRoundHandler = () =>   dispatch(gameActions.reRound())

   return (
      <BaseConfirm
         style={style}
         modalKey="re-round-game"
         onConfirm={reRoundHandler}
         question={confirmed.reTurn}            
      >
         {children}
      </ BaseConfirm>
   )
};

