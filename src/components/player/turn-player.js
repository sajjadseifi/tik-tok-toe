import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { color } from "../../constants";
import { Player } from "../../models";
import { Flex } from "../ui/flex";

export const TrunPlayer = ({player = new Player()})=>{

   return(
      <Flex  justCenter style={styles.turnPlayer}>
         <View style={styles.shadowBox}>
            <Text style={styles.turnPlayerText}>
               {player.name}
            </Text>
         </View>
      </Flex>
   )
}

const styles = StyleSheet.create({
   turnPlayer:{
      borderWidth:2,
      backgroundColor:color.white,
      borderColor:color.white,
      paddingVertical:10,
      fontSize:20,
      marginVertical:10,
      borderRadius:5
   },
   turnPlayerText:{
         fontSize:20,
         color:color.black,
         fontWeight:"bold"
   },
   shadowBox:{

   }
});