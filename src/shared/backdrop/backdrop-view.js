import React,{ useEffect,useRef }  from "react";
import { Animated, StyleSheet,  View } from "react-native";
import * as interpolate from "../../constants/interpolate";
import { checkingPropsBlit, updateObject } from "../../utils";
import { useBackdropDispatch, useBackdropSeletor } from "./backdrop-hook";
import { initialSatate } from "./backdrop-reducer";
import sharedStyle from "../styles";
import * as bkActions from "./backdrop-action"

export const BackDropView=({detail,zIndex}) => {
   //ref
   const trasnition = useRef(new Animated.Value(0)).current;
   const contentTransit =  useRef(new Animated.Value(0)).current;
   //selector
   const {duration} = useBackdropSeletor(state=>state.animationConfigure);
   const {backdropStyle} = useBackdropSeletor(state=>state);
   //state
   const { show,content,key,closable }=detail;
   const dispatch = useBackdropDispatch()
   //vars
   const {opacity} = backdropStyle;
   
   useEffect(()=>{
      anim(trasnition,opacity);
      anim(contentTransit,100);
      const dur = show ?10: duration + 50;
      setTimeout(() => {
            if(!show) dispatch(bkActions.removeBackdrop(key))
      },dur);
   },[show]);

   const anim=(to,value)=>{
      Animated.timing(to,{
         toValue:show?value:0,
         duration:duration,
         useNativeDriver: false,
      }).start();
   };
   const interPolOpacity=(to)=>{
      return {
         opacity: to.interpolate(interpolate.opacityBase)
      }
   }

   const clickBackdrop=()=> {
      if(closable)
         dispatch(bkActions.close(key));
   }

   const opacStyle =interPolOpacity(trasnition);
   const opacContentStyle=interPolOpacity(contentTransit);

   let uperStyles = checkingPropsBlit(initialSatate.backdropStyle,backdropStyle);
   let bdStyles = updateObject(styles.backdrop,uperStyles)

   return(
      <View style={updateObject(styles.container,{zIndex})}>
         <Animated.View onTouchEnd={clickBackdrop}  style={updateObject(bdStyles,opacStyle)}></Animated.View>
         <Animated.View style={updateObject(styles.content,opacContentStyle)}>
              {content}
         </Animated.View>
      </View>
   )
};

const styles = StyleSheet.create({
   container:{
         ...sharedStyle.fullScreen,
         ...sharedStyle.centerPoint,
   },
   backdrop:{
      ...sharedStyle.fullScreen,
      ...initialSatate.backdropStyle,
   },
   content:{
      opacity:1,
   }
});