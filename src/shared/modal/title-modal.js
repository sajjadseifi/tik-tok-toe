import React from "react"
import { StyleSheet,View,Text } from "react-native";
import { color } from "../../constants";
import { updateObject } from "../../utils";

export const TitleModal =({
   style,
   text,
   children
})=>{
   return (
      <View style={updateObject(styles.titleModal,style)}>
         <Text style={styles.title}>{text|| children}</Text>
      </View>
   )
};

const styles = StyleSheet.create({
   titleModal:{
      paddingHorizontal:5,
   },
   title:{
      fontSize:18,
      fontWeight:"bold",
      color:color.darkgrey
   },
})