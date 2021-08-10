import { pickObject, updateObject } from "../../utils";
import * as actionTypes from "./backdrop-action"
export const initialSatate= require("./backdrop-config.json");

export const backdropRecuer =(state = initialSatate,action)=>{
   switch(action.type){
      case actionTypes.BACKDROP_OPEN:return openBackdrop(state,action);
      case actionTypes.BACKDROP_CLOSE:return closedBackdrop(state,action);
      case actionTypes.BACKDROP_CHANGE_CONTENT:return setContent(state,action);
      case actionTypes.BACKDROP_APPEND_CONGIURE:return applyingConfigure(state,action);
      case actionTypes.BACKDROP_APPEND_BACKDROPSTYLE:return applyingBackdropStyle(state,action);
      case actionTypes.BACKDROP_ADD_BACKDROP:return addingBackDrop(state,action);
      case actionTypes.BACKDROP_REMOVE_BACKDROP:return removingBackDrop(state,action);
      case actionTypes.BACKDROP_POP_REPETATION: return removeRepetation(state,action);
   }
   return state;
};

const changeBackgroundVisibility=(state,key,show)=>{
   const existIndex = state.contents.findIndex(ct=> `${key}`  == `${ct.key}`)
      
   if(existIndex == -1) return state;
   const updatedContens = [...state.contents];

   updatedContens[existIndex] = updateObject(updatedContens[existIndex] ,{ show });

   return updateObject(state,{
      contents:updatedContens,
   })
};
const openBackdrop = (state,{key}) => changeBackgroundVisibility(state,key,true);

const closedBackdrop=(state,{key}) =>  changeBackgroundVisibility(state,key,false);

const setContent=(state,action)=>{
   const {content} = action;
   return updateObject(state,{ content })
};

const applyingConfigure=(state,action)=>{
   const {configure}=action;

   const updatedConf = updateObject(state.animationConfigure,configure) 

   return updateObject(state,{
      animationConfigure: updatedConf
   });
};

const applyingBackdropStyle=(state,action)=>{
   const {backdropStyle}=action;
   
   const updatedStyle =updateObject(state.backdropStyle,backdropStyle)
   
   return updateObject(state,{
      backdropStyle: updatedStyle
   });
};

const addingBackDrop =(state,action)=>{
   const obj = pickObject(["key","content","show","closable"])(action);

   let updatedContens = [...state.contents]

   const cIndex = updatedContens.findIndex(ct=> `${obj.key}` ==  `${ct.key}`);

   if(cIndex > -1)
      updatedContens[cIndex] = obj;
   else 
      updatedContens.push(obj)

   return updateObject(state,{
      contents:updatedContens
   })
};

const removingBackDrop =(state,action)=>{
   const {key} = action;

   const existIndex = state.contents.findIndex(c=>`${key}` ==`${c.key}`);

   if(existIndex < 0) return state;
   
   const updatedCotnents=[];

   for (const ctn of state.contents) {
      if(ctn.key == key) continue;

      updatedCotnents.push(ctn)
   }

   return updateObject(state,{
      contents:updatedCotnents
   })
};

const removeRepetation =(state,action)=>{
   const {repetition} = action;
   if(!repetition || repetition<0) return state;

   const updatedCotnents=[...state.contents];

   for (let i=0;i<repetition;i++)  updatedCotnents.pop()
   
   return updateObject(state,{
      contents:updatedCotnents
   })
};