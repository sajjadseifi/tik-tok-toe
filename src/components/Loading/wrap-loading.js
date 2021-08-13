import  React,{ useState,useEffect,useRef  } from "react"
import { StyleSheet,Animated} from "react-native";
import { FullScrenContainer } from "../container/full-screen-container";
import { animateTiming } from "../../utils/animate";
import { useGlobalSeletor } from "../../hook/global-hook";

export const stateShow ={
   default:0,
   loading:1,
   swin:2,
};

export const WrapLoading = ({component=()=>{},children})=>{
   const apploading = useGlobalSeletor(state=>state.app.apploading)
   const [state,setState] =useState(stateShow.loading);
   const opacity = useRef(new Animated.Value(1)).current;

   useEffect(()=>{
      if(stateShow.loading != state)
         return;

      animateTiming(opacity,0,apploading.delayTodefault,()=>setState(stateShow.default))         
      setState(stateShow.swin); 
   },[])
   const isOverlab = state != stateShow.default;
   const Component=component;
   return (
      <>
      {children}
      {isOverlab && (
         <FullScrenContainer  absolute style={styles.wrapLoading}>
            <Animated.View style={[styles.deadLoad,{ opacity}]}>
               <Component  loading={state == stateShow.loading} />
            </Animated.View>
         </FullScrenContainer>
      )}
      </>
   )
}

const styles = StyleSheet.create({
   wrapLoading:{
      // zIndex:999999999,
   },
   deadLoad:{
      flex:1,
      opacity:0.3
   },
})