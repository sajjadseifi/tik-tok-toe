import React from "react";
import {  StyleSheet,  View  } from "react-native";
import { stateShow, WrapLoading } from "./wrap-loading";
import { color } from "../../constants";
import { Image } from "react-native";
import { infinity } from "../../helpers/loader/image-loader";

export const GameLoading = ({children})=>{
   
   const Cmp =({loading})=> {
      const loader = loading == false ?null : (<Image   
         source={infinity}
         style={styles.infinityLoader}     
      />);

      return (
         <View style={styles.gameLoading}>
            {loader}
         </View>
      )
   };

   return (
      <WrapLoading component={Cmp}>
         {children}
      </WrapLoading>
   )
};

const styles = StyleSheet.create({
   gameLoading:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:color.black,
      padding:60,
      
   },
   infinityLoader:{
      width:200,
      height:200,
   },
   gameLoadingText:{
      color:color.white
   }
});
