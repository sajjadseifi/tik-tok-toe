import React from "react";
import {View,Text, StyleSheet} from "react-native"
import { color } from "../../../constants";
import { Flex } from "../../ui";

const SingleBox = ({score,color})=>(
   <View  style={[styles.score,{backgroundColor:color}]}>
         <Text style={styles.scoreText}>امتیاز</Text>
         <Text style={styles.scoreText}>:</Text>
         <Text style={styles.scoreText}>{`${score}`}</Text>
   </View>
)

export const ScoreBox =({player1,player2,eq})=>{
   return(
      <Flex  style={styles.socresContainer}>
         <SingleBox 
            color={player1.color}
            score={player1.score}
         />
         <Flex alignCenter justCenter>
            <View style={styles.eqContainer}>
               <Text style={[styles.eqText,styles.eq]}>{eq}</Text>
               <Text style={[styles.eqText,styles.eqAlphabet]}>=</Text>
            </View>
         </Flex>
         <SingleBox 
            color={player2.color} 
            score={player2.score} 
         />
   </Flex>  
   )
}; 
const styles = StyleSheet.create({
   socresContainer:{
      marginHorizontal:10,
      overflow:"hidden",
      borderRadius:10,
   },
   score:{
         flex:1,
         justifyContent:"center",
         alignItems:"center",
         // height:40,
         flexDirection:"row"
   },
   scoreText:{
      paddingHorizontal:2,
      color:color.white,
      fontWeight:"bold",
      fontSize:20,
   }, 
   eqContainer:{
      backgroundColor:color.gold,
      paddingHorizontal:15,
      paddingVertical:5,
   },
   eqText:{
      fontWeight:"bold",
      fontSize:12,
      color:color.grey,
      transform:[
         {scale:1.8}
      ],
      color:color.white,
   },
   eq:{
   },
   eqAlphabet:{
   } ,
});