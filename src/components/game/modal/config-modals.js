import { color } from "../../../constants";
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export const endRoundConfig =({
   messages,
   onClose,
   cbsFunc
})=>{
   const {baseModal,confirmed}=messages;
   const {
      next=()=>{},
      reRun=()=>{},
      exit=()=>{}
   } = cbsFunc;
   
   return ({
      next:{
         Icon:AntIcon,    
         iconName:baseModal["next:icon"],
         title:baseModal.next,
         titleColor:color.white,
         backgroundColor:color.purple,
         onPress:()=> onClose("nextTurn",confirmed.nextTurn,next)
      },
      reRun:{
         type:"outline",
         Icon:EntypoIcon,    
         iconName:baseModal["reRun:icon"],
         title:baseModal.reRun,
         titleColor:color.purple,
         backgroundColor:color.white,
         onPress:()=> onClose("reRunTurn",confirmed.reTurn,reRun)
      }, 
      exit:{
         Icon:AntIcon,    
         iconName:baseModal["exit:icon"],
         title:baseModal.exit,
         titleColor:color.purple,
         backgroundColor:color.white,
         onPress:()=> onClose("closed",confirmed.closed,exit)

      },
})
};