import React from "react";
import { Pressable,Alert } from "react-native";
import { StartModalGame } from "../home/start-game-modal";
import {addBackdrop,close} from "../../shared/backdrop/backdrop-action";
import { useBackdropDispatch, useBackdropSeletor } from "../../shared/backdrop/backdrop-hook";
import { useGlobalDispatch, useGlobalSeletor } from "../../hook/global-hook";
import { screensObject, statesGamePlay } from "../../constants/app";
import { changePage } from "../../store/actions/global-actions";
import { ConfirmModal } from "../../shared/modal/confirm-modal";

const startGameKey = "start-game-key";

export const StartGame = ({ children })=>{
   const onlineGamePaly = useGlobalSeletor(state=>state.messages.alert.onlineGamePaly);
   const {duration} = useBackdropSeletor(state=>state.animationConfigure);
   const dispatch =useGlobalDispatch();   
   const dispatchBkdrp =useBackdropDispatch();

   const gotoGame = async (state,degree) => {
      await onCloseModal(statesGamePlay.single);
      dispatch(changePage(screensObject.game,{
         playState:   state,
         ...(degree?{degree}:{})
      }));
   }

   const onStartSingle = (degree)=>{
      gotoGame(statesGamePlay.single,degree)
   }
   
   const onStartTwo = ()=>{
      gotoGame(statesGamePlay.tow)
   }
   
   const onStartOnline = ()=>{
      const onlineKeyAlert = "online-key-alert";
      const content = (
         <ConfirmModal
            modalKey={onlineKeyAlert}
            title={onlineGamePaly.title}
            question={onlineGamePaly.message}
            showCance={false}
         />
      )
      // Alert.alert(onlineGamePaly.title,onlineGamePaly.message);
      // dispatch(changePage(screensObject.game,statesGamePlay.tow));

      dispatchBkdrp(addBackdrop(onlineKeyAlert,content,true,true));
   };
   
   const onCloseModal =()=>{
      dispatchBkdrp(close(startGameKey));
      return  new Promise((res,rej)=>setTimeout(res, duration))
   }

   const onStartGame = ()=>{
      const content =(
         <StartModalGame
            onSinglePlay={onStartSingle}
            onTwoPlay={onStartTwo}
            onOnlinePlay={onStartOnline}
            onClosed={onCloseModal}
         />
      );
      dispatchBkdrp(addBackdrop(startGameKey,content,true,true));
   };

   return  <Pressable onTouchEnd={onStartGame}>{children}</Pressable>   
} ;