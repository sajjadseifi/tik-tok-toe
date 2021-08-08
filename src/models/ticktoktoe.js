import { Place } from "./place";
const ROWS=3;
const COLS=3;
export class TikTokToe{
   places=[];
   constructor(rows,cols){
      this.init(rows,cols);
   }
   init(rows=ROWS,cols=COLS){
      this.rows = rows;
      this.cols = cols;
      this.places = new Array(this.rows)
      
      for (let r = 0; r < this.rows; r++){
         this.places[r] = new Array(this.cols);
         
         for (let c= 0; c < this.cols; c++) 
         {
            const place = new Place(r,c);
            this.places[r][c]=place;
         }
      } 
   }  
   clear(){
      for (let row = 0; row < this.rows; row++)
        for (let col = 0; col < this.cols; col++)
             this.places[row][col] = new Place(row,col);
   }
   dump(){
      this.player = [];
   }
   setInPlace=(player,row,col)=>{
         if(row< 0 || row > this.rows <= row || colr < 0 || col > this.cols <= col)
            throw new Error("Out Of Reng Array");
         const place = this.places[row][col];
         if(place .exist)
            throw new Error("کاربر در این مکان نشسته است");
         place.sitInPlace(player)

   }
   getPlace(row,col){
      console.log({row,col})
      return this.places[row][col];
   } 
}