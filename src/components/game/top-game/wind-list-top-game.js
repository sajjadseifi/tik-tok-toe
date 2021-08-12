import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { WinNodePlayer } from "../../player/win-node-player";
import { Flex } from "../../ui";

export const WinListTopGame = ({player})=>{   
   const [nodes,setNodes] = useState([]);
   useEffect(()=>{
       if(nodes.length == player.score)  return;
       
      if(player.score == 0) setNodes([]);
       
       else addNodes()
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