import React from "react";
import { StyleSheet, View } from "react-native";
import { useGlobalSeletor } from "../../hook/global-hook";
import { TextView } from "../ui";

export const VSPlayer = ()=>{
   const {round} = useGlobalSeletor(state=>state.messages.screens.game);
   const rText = `${round}`.toUpperCase(); 
   return (
      <View style={styles.vsContainer}>
            <TextView   text={rText} style={styles.vs} />
      </View>
   )
}

const styles = StyleSheet.create({
   vsContainer:{
         alignItems:"center",
         justifyContent:"center",
         width:"100%"
   },
   vs:{
      paddingVertical:5,
      fontSize:40,
      fontWeight:"bold",
   },
})
