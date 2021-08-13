import React from "react";
import { LanguageItem } from "./language-item";
export const LanguageList = ({langs=[]})=>langs.map(
   (item,index)=><LanguageItem key={index} {...item} />
);