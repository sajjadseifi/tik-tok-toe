import React, { Fragment } from "react";
import { StyleSheet } from "react-native";
import { Flex } from "../ui";

export const Board = ({
   rows,
   cols,
   render=({row,col})=><></>
})=>{
      const Component = render;
      return(
         <Flex between  style={styles.baord}>
            {[...Array(rows)].map((_,rk)=>
               (
                  <Flex key={rk} between style={styles.baordRow}>
                        {[...Array(cols)].map((_,ck)=>(
                           <Fragment key={ck}>
                                 <Component row={rk}  col={ck} />
                           </Fragment>
                        ))}
                  </Flex>
               )
            )}
      </Flex>
      )
};

const styles = StyleSheet.create({
   baord:{
      flexDirection:"column",
      flexWrap:"wrap",
      flex:1,
   },
   baordRow:{
      width:"100%",
      height:"100%",
      flex:1,
   }
})