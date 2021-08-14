import React, { Fragment } from "react";
import { useRef } from "react";
import { Animated, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import FadeInFlatList from "../../shared/animate/fade-flatlist";
import { LanguageItem } from "./language-item";

export const LanguageList = ({langs=[],onChangeLang=(key)=>{},appLanguage})=>{
   console.log({appLanguage})
   return (
      <FlatList
               data={langs}
               keyExtractor={(_,index)=>`${index}`}
               renderItem={({ item })=>{
                  const selected = appLanguage == item.keyLang;
                  console.log(appLanguage , item.keyLang,selected)
                  const Cmp = selected? Fragment : Pressable;
                  let props = selected ? {}:{onPress:()=>onChangeLang(item.keyLang)}
                  
                  return(
                     <Cmp {...props}>
                        <LanguageItem {...item} selected={selected} />
                     </Cmp>
                  )
               }}
      />
)
}