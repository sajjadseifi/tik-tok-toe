import {Audio} from "expo-av"

export class SoundPlayer{
   static soundObjects = {}
   static load(library) {
      const promisedSoundObjects = []
  
      for (const name in library) {
        const sound = library[name]
  
        SoundPlayer.soundObjects[name] = new Audio.Sound()
         
        const psound =  SoundPlayer.soundObjects[name].loadAsync(sound)

        promisedSoundObjects.push(psound)
      }
      return promisedSoundObjects
    }  
    
   static async playSound(name) {
      try {
      if (SoundPlayer.soundObjects[name]) {
         await SoundPlayer.soundObjects[name].replayAsync()
      }
      } catch (error) {
         console.warn(error)
      }
    }
}