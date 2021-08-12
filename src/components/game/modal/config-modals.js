import { color } from "../../../constants";
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export const endRoundConfig =({
   messages,
   onClose,
   cbsFunc
})=>{
   const {baseModal,confirmed}=messages;
   const { next, reRun, exit,newPlay,playof } = cbsFunc;
   
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
      newPlay:{
         Icon:AntIcon,    
         iconName:baseModal["newPlay:icon"],
         title:baseModal.newPlay,
         titleColor:color.white,
         backgroundColor: color.purple,
         onPress:()=> onClose("play",confirmed.newPlay,newPlay)
      }, 
      playof:{
         type:"outline",
         Icon:AntIcon,    
         iconName:baseModal["playof:icon"],
         title:baseModal.playof,
         titleColor:color.purple,
         backgroundColor:color.white,
         onPress:()=> onClose("playofTurn",confirmed.playofTurn,playof)
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