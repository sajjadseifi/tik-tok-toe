import React from "react"
import { StyleSheet } from "react-native";
import { WinNodePlayer } from "../../player/win-node-player";
import { Flex } from "../../ui";

export const WinListTopGame = ({player})=>{
   const windNodes = new Array(player.score).fill(undefined)
   return (
      <Flex style={styles.grid}>
         {windNodes.map((_,index)=><WinNodePlayer key={index} style={styles.node} color={player.color} />)}
      </Flex>
   )
}

const styles = StyleSheet.create({
      grid:{
         paddingVertical:10,
         flexWrap:"wrap"
      },
      node:{
            marginBottom:5,
            marginHorizontal:2,
      }
});