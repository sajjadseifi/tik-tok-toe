import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "../../constants";
import { cleverPluckedCombination } from "../../utils";

export const TextView = ({text,children,style={},viewStyle={},...props})=>{   
   return (
      <View style={cleverPluckedCombination(styles.view,viewStyle)}>
         <Text {...props} style={cleverPluckedCombination(styles.textView,style)}>
            {text || children}
         </Text>
      </View> 
   );
}

const styles = StyleSheet.create({
   view:{

   },
   textView:{
      color:color.white
   }
});