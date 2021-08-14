import React from "react";
import { View,StyleSheet } from "react-native";
import { CircleShape, TimesShape } from "../shape";
import { Flex } from "../ui";

export const HomeLogo =()=>{
   return(
      <View style={styles.gameLogo}>
         <Flex>
            <CircleShape color="#ff00a0"  />
            <TimesShape color="#009ffd"  />
         </Flex>
         <Flex>
            <TimesShape color="#009ffd" />
            <CircleShape color="#ff00a0" />
         </Flex>
      </View>
   )
};


const styles = StyleSheet.create({
   gameLogo:{

   }
})
