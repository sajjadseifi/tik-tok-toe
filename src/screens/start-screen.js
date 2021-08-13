import React,{ useRef, useEffect }  from "react";
import  { StyleSheet, View,Image,Text, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { color } from "../constants";
import { APP_HEIGTH, APP_WIDTH } from "../constants/size";
import { logo } from "../helpers/loader/image-loader";
import { useGlobalDispatch, useGlobalSeletor } from "../hook/global-hook";
import { animateTiming } from "../utils/animate";
import * as globalActions  from "../store/actions/global-actions"
import { updateObject } from "../utils";

const LOGO_SIZE = APP_WIDTH * 1/2;

export const StartScreen = ({})=>{
   const {screen,company} = useGlobalSeletor(state=>state.app);
   const {startTime,delayTime,endTime} = screen.start;
   const opacity  = useRef(new Animated.Value(1)).current;
   const dispatch = useGlobalDispatch();
   const companyName = [...`${company.name}`.toUpperCase()].join(" ");
   

   useEffect(()=>{
            show();
   },[])

   
   const show = ()=>
       animateTiming(opacity,0,startTime,delay);   
   const delay = ()=>
       animateTiming(opacity,0,delayTime,hidde);   
   const hidde = ()=>
       animateTiming(opacity,1,endTime,()=>{
          dispatch(globalActions.changePage("home"))
       });   
   
   const styleAnim = updateObject(styles.overblack,{
      opacity
   })    
   return (
      <>      
         <LinearGradient 
         start={{x: 0, y: 0}} 
         end={{x:1, y: 1}}
         style={styles.start} 
         colors={[color.gold,color.orange]} 
         >  
            <View style={styles.box}>
               <Image source={logo}   style={styles.logo} />
               <Text style={styles.deew}>{companyName}</Text>
            </View>   
      </LinearGradient>
      <Animated.View style={styleAnim} />
   </>

   )
};

const styles = StyleSheet.create({
   start:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
   },
   box:{
      alignItems:"center",
   },
   logo:{
      width:LOGO_SIZE,
      height:LOGO_SIZE,
      borderRadius:LOGO_SIZE
   },
   deew:{
      marginTop:20,
      fontWeight:"bold",
      fontSize:40,
      color:color.white
   },
   overblack:{
      backgroundColor:color.black,
      position:"absolute",
      left:0,
      top:0,
      width:APP_WIDTH,
      height:APP_HEIGTH
   }
});
