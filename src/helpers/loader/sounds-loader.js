export const audios = {
   MIXKIT:"mixkit",
   NICE:"nice",
};
export const soundsLoader =()=>{
   return  {
      mixkit: require('../../assets/sounds/mixkit.wav'),
      nice: require('../../assets/sounds/nice.mp3'),
   }
};