import React from "react"
import {StyleSheet, View} from "react-native"
import { color } from "../constants"
import { cleverPluckedCombination, firstInSameKey, ifExistenceComing } from "../utils"

const borderStyleTypes={
   solid:"solid",
   dashed:"dashed",
   dotted:"dotted",
}

const cardProps={
   solid:null,
   dashed:null,
   dotted:null,
   children:null,
   borderStyle:null,
   color:null
};

export const Card =({children,borderStyle,color,...props}=cardProps)=>
{
   let style = cleverPluckedCombination(styles.card,props.style);
   const bstl = firstInSameKey(borderStyleTypes,props);   

   const cardGift = {
      borderStyle : borderStyle ? borderStyle: borderStyleTypes[bstl],
      color
   };

   style = ifExistenceComing(style,cardGift);   

   return <View {...props} style={style}>{children}</View>
}

const styles =StyleSheet.create({
   card:{
      borderRadius:5,
      borderWidth:1,
      borderColor:color.white,
   }
})