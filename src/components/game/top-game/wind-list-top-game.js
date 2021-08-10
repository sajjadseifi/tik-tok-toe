import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { WinNodePlayer } from "../../player/win-node-player";
import { Flex } from "../../ui";

export const WinListTopGame = ({player})=>{   
   const [nodes,setNodes] = useState([]);
   // const windNodes = new Array(player.score).fill(undefined);
   useEffect(()=>{
       if(nodes.length != player.score) addNodes();
   },[player.score])

   const addNodes = ()=>{
         const node = (
            <WinNodePlayer
               key={nodes.length} 
               style={styles.node}
               color={player.color} 
            />
         );
         setNodes(prev=>[...prev,node])
   } ;
   return (
      <Flex style={styles.grid}>
         {nodes.map((item)=>item)}
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