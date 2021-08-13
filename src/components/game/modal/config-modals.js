import { color } from "../../../constants";
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export const endRoundConfig =({
   config,
   onClose,
   cbsFunc
})=>{
   const {icon,messages}=config;
   const {baseModal,confirmed}=messages;
   const { next, reRun, exit,newPlay,playof } = cbsFunc;
   
   return ({
      next:{
         Icon:AntIcon,    
         iconName:icon.next,
         title:baseModal.next,
         titleColor:color.white,
         backgroundColor:color.purple,
         onPress:()=> onClose("nextTurn",confirmed.nextTurn,next)
      },
      reRun:{
         type:"outline",
         Icon:EntypoIcon,    
         iconName:icon.reRun,
         title:baseModal.reRun,
         titleColor:color.purple,
         backgroundColor:color.white,
         onPress:()=> onClose("reRunTurn",confirmed.reTurn,reRun)
      },
      newPlay:{
         Icon:AntIcon,    
         iconName:icon.newPlay,
         title:baseModal.newPlay,
         titleColor:color.white,
         backgroundColor: color.purple,
         onPress:()=> onClose("play",confirmed.newPlay,newPlay)
      }, 
      playof:{
         type:"outline",
         Icon:AntIcon,    
         iconName:icon.playof,
         title:baseModal.playof,
         titleColor:color.purple,
         backgroundColor:color.white,
         onPress:()=> onClose("playofTurn",confirmed.playofTurn,playof)
      }, 
      exit:{
         Icon:AntIcon,    
         iconName:icon.exit,
         title:baseModal.exit,
         titleColor:color.purple,
         backgroundColor:color.white,
         onPress:()=> onClose("closed",confirmed.closed,exit)
      },
})
};