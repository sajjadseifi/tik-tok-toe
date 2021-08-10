import React from "react"
import { BackDropProvider } from "./backdrop-context"
import { BackdropMulti } from "./backdrop-multi"

export const Backdrop = ({children}) => (
     <BackDropProvider>
         {children}
         <BackdropMulti  />
   </BackDropProvider>
)