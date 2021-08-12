import { fontsLoader } from "./font-loader";
import {  soundsLoader} from "./sounds-loader";

export const loader =()=>{
   const fonts = fontsLoader();
   const sounds =soundsLoader();
   
   return {
      fonts,
      sounds
   }
};