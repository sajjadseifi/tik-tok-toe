import React from "react";
import { StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { updateObject } from "../../utils";

export const CustomIcon =({Icon,color,name,...props})=>( 
   <Icon
      style={styles.iconButton}
      name={name}
      color={color}
      size={15}
      {...props}
   />
);

export const ButtonIcon =({
   titleColor,
   backgroundColor,
   buttonStyle,
   title,
   iconName,
   type,
   Icon=FontAwesome,
   onPress=()=>{}
})=>{

   const btnStyle  =updateObject(styles.button,
      updateObject(buttonStyle,{
         borderColor:type == "outline" ?titleColor:backgroundColor,
         backgroundColor,
      }
   ));
   const titleStyle = {color:titleColor};
   return (
      <Button 
         title={title}
         type={type}
         onPress={onPress}  
         titleStyle={titleStyle}
         buttonStyle={btnStyle}
         icon={()=> <CustomIcon Icon={Icon}  name={iconName} color={titleColor}/> }
      />
   )
};

const styles  = StyleSheet.create({
   button:{
      borderWidth:1,
      marginHorizontal:6,
      minWidth:90,
      paddingVertical:1,
   },
   iconButton:{
      marginRight:5
   },
})