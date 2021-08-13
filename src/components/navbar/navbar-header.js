import React from "react"
import { StyleSheet, View } from "react-native";
import { SwitchLanguage } from "../add-ones/switch-language";
import { Flex } from "../ui";
import { ExitButton } from "../add-ones/exit-button";
export const NavbarHeader =({showSwitch=true,showExit=true,forceExit,dark=true})=>{
   const darkMode = dark?{}:{};
   return (
      <View style={[styles.nav,darkMode]}>
         <Flex between alignCenter>
            {showSwitch && <SwitchLanguage />}
            {showExit && <ExitButton force={forceExit} />}
         </Flex>
      </View>
   )
};

const styles = StyleSheet.create({
   nav:{
      width:"100%",
   },
   dark:{
      backgroundColor:"#2f2f2f",
      paddingVertical:5,
      paddingHorizontal:20,
      borderRadius:8
   }
}) 