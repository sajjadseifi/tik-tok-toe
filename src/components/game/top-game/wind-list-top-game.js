import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { updateObject } from "../../../utils";
import { Flex } from "../../ui";

export const WinListTopGame = ({player,revers})=>{   
   const [nodes,setNodes] = useState([]);
   
   useEffect(()=>{
       if(nodes.length == player.score)  return;
       
      if(player.score == 0) setNodes([]);
       
       else addNodes()
   },[player.score])
  
   const addNodes = ()=>{
         const Shape = player.shape;
         const node = (<Shape size={20} color={player.color} />);
         setNodes(prev=>[...prev,node])
   };
   const boxFlexStyle = !revers 
   ?  styles.grid
   :   updateObject(styles.grid,styles.revers)
   return (
      <Flex style={boxFlexStyle}>
         {nodes.map((item,index)=><View key={index} style={styles.node}>{item}</View>)}
      </Flex>
   )
}

const styles = StyleSheet.create({
      grid:{
         paddingVertical:10,
         flexWrap:"wrap"
      },
      revers:{
         flexDirection:"row-reverse"
      },
      node:{
            marginBottom:5,
            marginHorizontal:2,
      }
});