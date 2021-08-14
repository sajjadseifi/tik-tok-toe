import { color } from "../../constants";

export const confirmConfig = (conf,handler=(state)=>{}) => {
   const {messages,icon} = conf;
   return {
      cancel:{
         type:"outline",
         iconName:icon.cancel,
         title:messages.cancel,
         titleColor:color.purple,
         backgroundColor:color.white,
         onPress:()=>handler(false)
      },
      ok:{
         iconName:icon.ok,
         title:messages.ok,
         titleColor:color.white,
         backgroundColor:color.purple,
         onPress:()=>handler(true)
      },
   }
};