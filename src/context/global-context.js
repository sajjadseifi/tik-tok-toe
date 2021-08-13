import React from "react";
import { useReducer } from "react";
import { initialGlobalState,globalReducer } from "../store/reducer/global-reducer";
import { updateObject } from "../utils";
export const GlobalContext = React.createContext()

export  const GlobalProvider =({children,...props})=>{
   const [state,dispatch] = useReducer(globalReducer,
      updateObject(initialGlobalState,props)
   );
   
   const value ={ state , dispatch };
   
   return (
         <GlobalContext.Provider value={value}>
            {children}
         </GlobalContext.Provider>
      )
}
