import React from "react";
import { StyleSheet, View } from "react-native";
import { useGlobalSeletor } from "../../hook/global-hook";
import { TextView } from "../ui";

export const VSPlayer = ()=>{
   const {round} = useGlobalSeletor(state=>state.messages.screens.game);
   return (
      <View style={styles.vsContainer}>
            <TextView   text={round} style={styles.vs} />
      </View>
   )
}

const styles = StyleSheet.create({
   vsContainer:{
         alignItems:"center",
         justifyContent:"center",
   },
   vs:{
      fontSize:40,
      fontWeight:"bold",
   },
})
