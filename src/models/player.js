
export class Player {
   constructor(id,name,score,color,shape){
      this.id =`${id}`
      this.name = `${name}`;
      this.score = +score;
      this.color = `${color}`;
      this.shape = shape;
   } 

   addScore(){
      this.score = this.score + 1;
   }
}
