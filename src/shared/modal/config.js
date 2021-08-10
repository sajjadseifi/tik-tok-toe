import { color } from "../../constants";

export const confirmConfig = (conf,handler=(state)=>{}) => {
   return {
      cancel:{
         type:"outline",
         iconName:conf["cancel:icon"],
         title:conf.cancel,
         titleColor:color.purple,
         backgroundColor:color.white,
         onPress:()=>handler(false)
      },
      ok:{
         iconName:conf["ok:icon"],
         title:conf.ok,
         titleColor:color.white,
         backgroundColor:color.purple,
         onPress:()=>handler(true)
      },
   }
};