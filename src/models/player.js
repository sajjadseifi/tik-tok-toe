
export class Player {
   constructor(id,name,score,color,shape){
      this.id =`${id}`
      this.name = `${name}`;
      this.score = +score;
      this.color = `${color}`;
      this.shape = shape;
   }
   static restScorePlayer(player){
      if(!player) return;

      const {id,name,color,shape} = player;
      return new Player(id,name,0,color,shape);
   } 
   setScore(score){
      this.score = score;
   } 
   addScore(){
      this.score = this.score + 1;
   }
   resetScore(){
      this.score = 0;
   }
}
