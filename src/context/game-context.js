import React from "react";
import { useReducer } from "react";
import { useEffect } from "react/cjs/react.development";
import { setCurrentPlayer } from "../store/actions/game-action";
import * as t3Types from "../store/actions/tik-toc-toe";
import * as gmTypes from "../store/actions/game-action";

import { gameReducer, initialGameState } from "../store/reducer";
export const GameStateContext = React.createContext()

const props={
   player1:null,
   player2:null,
   turn:0,
   maxRounds:10,
   children:null,
};
export  const GameProvider =({children,...initialState}=props)=>{
      const [state,dispatch] = useReducer(gameReducer,{
         ...initialGameState,
         ...initialState
      });
      const value ={ state , dispatch };
      
      useEffect(()=>{
         dispatch(t3Types.initial());
         dispatch(gmTypes.setCurrentPlayer(state.turn));
      },[])
      
      return (
         <GameStateContext.Provider value={value}>
            {children}
         </GameStateContext.Provider>
      )
}