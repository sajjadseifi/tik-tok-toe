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