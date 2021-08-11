import React from "react";
import { useReducer } from "react";

export const GlobalContext = React.createContext()

export const appMessages = require("../config/message.json");

const initialState={
   messages:appMessages
}
export  const GlobalProvider =({children})=>{
   const [state,dispatch] = useReducer((state)=>state,initialState);
   const value ={ state , dispatch };

   return (
         <GlobalContext.Provider value={value}>
            {children}
         </GlobalContext.Provider>
      )
}