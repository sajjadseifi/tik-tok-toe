
export const updateObject=(origin={},mercenary={})=>{
   return {
      ...origin,
      ...mercenary
   }
}

export const cleverPluckedCombination=(origin={},mercenary={})=>{
   if(!mercenary) return origin;

   if(!origin) return mercenary;

   return updateObject(origin,mercenary)
}
export const firstInSameKey=(org,targ)=>{
   for(let ot in org)
      for(let tk in targ)
         if(ot  == tk && targ[tk])
            return ot;
         
   return null;
};

export const ifExistenceComing=(iAm={},gifts={})=>{
   const myBirth = updateObject(iAm,{});
   
   for (const ribbon in gifts) 
      if(gifts[ribbon])
         myBirth[ribbon] = gifts[ribbon]
      
   return myBirth;
};

export const checkingPropsBlit=(blitBook,bus)=>{
   let acceptor ={};
   for(let blit in bus)
      for(let bb in blitBook){
         if(`${bb}` != `${blit}`)
            continue;

         acceptor = updateObject(acceptor,{[blit]:bus[blit]})
         break;
      }
   return acceptor;
}
export const pickObject=(keys=[])=>{
   return (obj)=>{
        let target = {};
       
        for (const key of keys) 
            target= updateObject(target,{
               [key]:obj[key]
            })

      return target;
   };
}