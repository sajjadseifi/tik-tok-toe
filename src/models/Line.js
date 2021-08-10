import { Position } from "./position";

export class Line {
   constructor(start = new Position(),end= new Position()){
      this.start =start;
      this.end =end;
   }
}