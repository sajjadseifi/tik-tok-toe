import { updateObject } from "./utils";

export const dirBoardCreator=(row,col,rows,cols,styles)=>{
   const dirBorders = [{}]; 
   //left
   if(col > 0 &&  col <cols)
      dirBorders.push(styles.left)
   //right
   if(col > -1 && col <cols -1)
   dirBorders.push(styles.right)
   //top
   if(row > 0 && row <rows )
      dirBorders.push(styles.top)
   //bottom
   if(row > -1 && row <rows -1)
       dirBorders.push(styles.bottom)

       const computed = dirBorders.reduce((total={},current={})=>updateObject(total,current));
   return computed
};
