export class Place{
   constructor(row,col){
      this.useAnimate=true;
      this.row=row; 
      this.col =col;
   }
   sitInPlace=(player) => {
      this.player= player;
      this.exist =true;
      this.animated();
   }
   init(){
      this.clear();
   }
   clear(){
      this.exist = false;
      this.player = null;
   }
   animated=()=>this.useAnimate = false;
}