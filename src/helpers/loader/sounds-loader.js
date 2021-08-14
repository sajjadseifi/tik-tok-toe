export const audios = {
   MIXKIT:"mixkit",
   NICE:"nice",
   NOTIFICATION:"notification"
};
export const soundsLoader =()=>{
   return  {
      mixkit: require('../../assets/sounds/mixkit.wav'),
      nice: require('../../assets/sounds/nice.mp3'),
      notification:require('../../assets/sounds/notification.wav'),
   }
};