import React from "react";
import { color } from "../../constants";
import { DegreeGame } from "../shared/degree-game";
import { IconButton } from "../ui/icon-button";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import {chahngeDgree} from "../../store/actions/game-action"
import { useGamePlayDispatch, useGamePlaySeletor } from "../../hook/game-hook";
export const ChangeLevelButton=({})=>{
   const degree = useGamePlaySeletor(state=>state.degree)
   const dispatch = useGamePlayDispatch();
   
   const onChangeDegre=(degree)=>
      dispatch(chahngeDgree(degree))

   return (
      <DegreeGame  degree={degree} onPress={onChangeDegre}>
         <IconButton 
            name="robot" 
            color={color.white}
            size={30}
            Icon={MaterialCommunityIcons}
         />
      </DegreeGame>
   )
};