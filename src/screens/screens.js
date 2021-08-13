import React from "react";
import { useGlobalSeletor } from "../hook/global-hook";
import { GamePlayScreen } from "./gameplay-screen";
import { HomeScreen } from "./home-screen";
import { StartScreen } from "./start-screen";

export const screensObjet ={
   start:StartScreen,
   home:HomeScreen,
   game:GamePlayScreen   
};

export const Screens=()=>{
   const {page} = useGlobalSeletor(state=>state);
   
   const Scr = screensObjet[page];

   return <>{Scr && <Scr/>}</>
}