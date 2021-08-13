import React from "react";
import { View } from "react-native";
import { Pressable, StyleSheet, Text } from "react-native";
import { BaseConfirm } from "../shared/confirm/base";
import { Flex } from "../ui";

export const LanguageItem = ({keyLang,value})=>{
   return(
      <View style={styles.language}>
         <Flex  between>
            <Text style={styles.langKey}>{keyLang}</Text>
            <Text style={styles.langValue}>{value}</Text>
         </Flex>
      </View>
   )
};

const  styles = StyleSheet.create({
   language:{
      borderBottomColor:"red",
      borderBottomWidth:1,
      paddingHorizontal:40,
      paddingVertical:15,
      transform:[
         {rotateX:"80deg"},
         {perspective: 500}
      ]
   },
   langValue:{

   }
}) ;