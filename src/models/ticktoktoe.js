import { Line } from "./Line";
import { Place } from "./place";
import { Position } from "./position";
import { Roboot } from "./robbot";
const ROWS=3;
const COLS=3;
export class TikTokToe{
   places=[];
   endGame=false;
   lineBlade=null;
   sitedNumber=0;
   isWin=false;
   constructor(rows,cols){
      this.init(rows,cols);
   }
   init(rows=ROWS,cols=COLS){
      this.endGame=false;
      this.lineBlade=null;
      this.sitedNumber=0;
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
      this.sitedNumber=0;
      this.endGame=false;
      this.lineBlade=null;
      for (let row = 0; row < this.rows; row++)
        for (let col = 0; col < this.cols; col++)
             this.places[row][col] = new Place(row,col);
   }
   dump(){
      this.player = [];
   }

   setInPlace=(player,row,col)=>{
         if(this.endGame)
            return;
         if(row< 0 || row >= this.rows || col < 0 || col >= this.cols)
            return;

         const place = this.places[row][col];
         console.log({col,row},"place.exist : ",place.exist)
         if(place.exist)
            return;
         
         this.sitedNumber=this.sitedNumber + 1;
         place.sitInPlace(player)
         this.checkWin()
   }
   getPlace(row,col){
      return this.places[row][col];
   } 
   createLineBlade(start1,end1,start2,end2){
      const start = new Position(start1,end1);
      const end = new Position(start2,end2);
      this.lineBlade =  new Line(start,end);
   }
   checkRow(){
      for(let index=0;index < this.rows; index++)
         if(this.checker(index,0,0,1)){
            this.createLineBlade(index,0,index,this.cols-1)
            return true;
         }
      return false;
   }  
   checkCol(){
      for(let index=0;index < this.cols; index++)
         if(this.checker(0,index,1,0)){
            this.createLineBlade(0,index,this.rows-1,index)
            return true;
         }
      return false;
   }
   checkDiameter(){
         if(this.checker(0,0,1,1)){
            this.createLineBlade(0,0,this.rows-1,this.cols-1)
            return true;
         }
         if(this.checker(this.rows-1,0,-1,1)){
            this.createLineBlade(this.rows-1,0,0,this.cols-1)
            return true;
         }
      return false;
   }

   checker(row,col,row_inc=1,col_inc=1){
      const newRow = row + row_inc;
      const newCol = col + col_inc;
      
      if(newCol >= this.cols || newRow >= this.rows)  return true;
   
      if(newCol < 0 || newRow < 0)  return true;
   
      if(row_inc == 0 && col_inc == 0) return true;
      
      const player = this.places[row][col].player;
      const nexPlayer = this.places[newRow][newCol].player;

      if(!player || !nexPlayer || nexPlayer.id != player.id) return false;
       
      return this.checker(newRow,newCol,row_inc,col_inc)
   }
   checkCanRun(){
         let end = true;
         for(let i=0;i<this.rows && end;i++)
            for(let j=0;j<this.cols;j++){
               if(this.places[i][j].player)
                  continue;
               
                  end=false;
                  break;
            }

            return !end;
   }
   checkWin(){
      this.endGame =  (this.checkRow() || this.checkCol() || this.checkDiameter())
 
      if(this.endGame)
         this.isWin = true;
      else if(this.sitedNumber == 9){
         this.isWin = false;
         this.endGame = true;
      }
   }
   endOfGame=()=>this.endGame;
   
   findBestPlace=(degree=0)=>{
      const rob = new Roboot(degree,this.places);
      const place =  rob.execute();
      return place;
   }
}