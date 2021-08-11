import React from "react";
import { StyleSheet,View } from "react-native";
import { OpacityAnimate } from "../../shared/animate";

export const BaseShape=({
   wrapper=OpacityAnimate,
   children,
   onAnimated=()=>{}
})=>{
   
   const Wrapper =wrapper;

   return(
      <Wrapper style={styles.opacityWrapper}>
         <View style={styles.base}>
            {children}
         </View>
    </Wrapper>
   )
};

const styles = StyleSheet.create({
   opacityWrapper: {
      width:"100%",
      height:"100%"  
   },
   base:{
      alignItems:"center",
      justifyContent:"center"
   }
})