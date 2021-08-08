import React from "react";
import { StyleSheet, View } from "react-native";
import { TextView } from "../ui";

export const VSPlayer = ()=>(
   <View style={styles.vsContainer}>
         <TextView   text="VS" style={styles.vs} />
   </View>
)

const styles = StyleSheet.create({
   vsContainer:{
         alignItems:"center",
         justifyContent:"center",
   },
   vs:{
      paddingVertical:5,
      fontSize:40,
      fontWeight:"bold",
   },
})
