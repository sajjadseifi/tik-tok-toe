import { degreeLevel } from "../constants/app";

export class Roboot {
   constructor(degree,places=[],player){
      this.degree = degree;
      this.places =places;
   }
   execute(){
      let  attatch =()=>{};
      switch(this.degree){
         case degreeLevel.simple :
             attatch=  this.simpleIntelijacne;
            break;
         case degreeLevel.medum :
            attatch = this.simpleIntelijacne;
            break;
         case degreeLevel.hard : 
            attatch= this.simpleIntelijacne;
            break;
      }
      return attatch();
   }
   simpleIntelijacne=()=>{
      const newPlaces = [];
      for (const rowPlaces of this.places) 
         for (const place of rowPlaces)
            if(!place.exist)
               newPlaces.push(place) 

      const index = Math.floor(Math.random() * newPlaces.length);
     
      if(index >= 0)
         return newPlaces[index];
      return null;
   }
   medumIntelijacne=()=>{
      //add feachure affter
      return simpleIntelijacne();
   };
   medumIntelijacne=()=>{
      //add feachure affter
      return simpleIntelijacne();
   };
}