import React,{useEffect,useState} from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements"
import { useGlobalSeletor } from "../../hook/global-hook";
import { useBackdropDispatch } from "../../shared/backdrop/backdrop-hook";
import { close } from "../../shared/backdrop/backdrop-action";
import { ExplosiveModal } from "../../shared/modal/explosive-modal";
import { WhiteWindow } from "../../shared/ui/white-window";
import { BasePress } from "./base-press";
import { Flex } from "../ui";
import { color } from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome"
import { degreeLevel } from "../../constants/app";
import { updateObject } from "../../utils";
import { CloseRedButton } from "../ui/close-red-button";

const buttons = [
   {
      key:"simple",
      title:"simple",
      deggree:degreeLevel.simple,
      color:color.grey,
   },
   {
      key:"medium",
      title:"medium",
      deggree:degreeLevel.medum,
      color:color.grey,
   },
   {
      key:"hard",
      title:"hard",
      deggree:degreeLevel.hard,
      color:color.grey,
   }
]

const DegreeModal =({degree=-1,onSelectDegree=(degree)=>{},onClose=()=>{}})=>{
   const degreeText = useGlobalSeletor(state=>state.messages.modal.degree);
   const degreeIcon = useGlobalSeletor(state=>state.icon.modal.degree);
   const [state,setState]= useState(buttons);
   
   useEffect(()=>{ setState(creatinButton()) },[degree]);

   const creatinButton = ()=> buttons.map((btn)=> updateObject(btn,
      {
         title: degreeText[btn.key]
      }
   ));
   
   return(
      <ExplosiveModal speed={1.5}>
         <WhiteWindow style={styles.box}>
            <Flex>
               <CloseRedButton onClose={onClose} />
            </Flex>
            <Flex justCenter>
               <Icon 
                  name={degreeIcon.titleIcon}
                  size={120}
                  color={color.grey}
               />
            </Flex>
            <Flex style={styles.buttonGroup}>
               {state.map((btn)=>{
                  const selected =degree ==btn.deggree ? styles.selectedDegree:{}
                  return  (
                        <Button 
                           key={btn.key}
                           onPress={()=>onSelectDegree(btn.deggree)}
                           containerStyle={styles.degreeCtn}
                           buttonStyle={styles.degreeBtn}
                           title={btn.title}
                           titleStyle={[styles.degreeTextBtn,selected]}
                        />
                     )
               })}
            </Flex>
         </WhiteWindow>
      </ExplosiveModal>
   )
};

const modalKey ="select-degree";

export const DegreeGame =({degree=-1,onPress=()=>{},children})=>{
   const dispatchBkdrp = useBackdropDispatch();
   const closed =()=>dispatchBkdrp(close(modalKey));

   const selectDegree = (degree) => {
      onPress(degree); 
      closed();
   }
   return (
   <BasePress
      modalKey={modalKey}
      render={()=>(
         <DegreeModal
            degree={degree}
            onClose={closed}
            onSelectDegree={selectDegree} 
         />
      )}
   >
      {children}
   </BasePress>   
   )
};


const styles = StyleSheet.create({
   box:{
      backgroundColor:color.darkbeautiful,
   }, 
   buttonGroup:{
      overflow:"hidden",
      marginVertical:20,
      borderRadius:10,
      backgroundColor:color.grey,
      borderColor:color.grey,
      borderWidth:1,
      marginHorizontal:20,
   },
   degreeCtn:{
      flex:1,
   },
   degreeBtn:{
      backgroundColor:color.darkbeautiful,
      borderRadius:0,
   },
   degreeTextBtn:{
      fontWeight:"bold",
      fontSize:18,
   },
   selectedDegree:{
      color:color.blueGreen
   }
});