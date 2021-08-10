import React, { useReducer }  from "react";
import { updateObject } from "../../utils";
import { backdropRecuer,initialSatate } from "./backdrop-reducer";

export const BackDropContext = React.createContext()

export const BackDropProvider =({children,...props})=>{
   
   const [state,dispatch] = useReducer(backdropRecuer,updateObject(initialSatate,props));

   const value ={ state,dispatch};

   return( 
      <BackDropContext.Provider value={value} >
         {children}
      </BackDropContext.Provider>
   )
};
