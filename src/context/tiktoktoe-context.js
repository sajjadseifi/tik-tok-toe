import React,{ useReducer,useEffect } from "react";
import * as  t3Types from "../store/actions/tik-toc-toe";
import { tiktoktoeReducer,initialTikTokToeState } from "../store/reducer";
export const TikTokToeContext = React.createContext()

const  {Provider} =TikTokToeContext 

export  const TikTokToeProvider =({children})=>{
      const [state,dispatch] = useReducer(tiktoktoeReducer,initialTikTokToeState);      
      const value ={ state , dispatch };
      
      useEffect(()=>dispatch(t3Types.initial()),[])
      
      return <Provider value={value}>{children}</Provider>
}