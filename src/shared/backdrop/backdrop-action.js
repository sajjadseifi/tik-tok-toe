import { reducerAction } from "../../store/actions/action-types";

export const BACKDROP_OPEN="[BACKDROP_OPEN]";
export const BACKDROP_CLOSE="[BACKDROP_CLOSE]";
export const BACKDROP_CHANGE_CONTENT="[BACKDROP_CHANGE_CONTENT]";
export const BACKDROP_ADD_BACKDROP="[BACKDROP_ADD_BACKDROP]";
export const BACKDROP_REMOVE_BACKDROP="[BACKDROP_REMOVE_BACKDROP]";
export const BACKDROP_POP_REPETATION="[BACKDROP_POP_REPETATION]";
export const BACKDROP_APPEND_CONGIURE="[BACKDROP_APPEND_CONGIURE]";
export const BACKDROP_APPEND_BACKDROPSTYLE="[BACKDROP_APPEND_BACKDROPSTYLE]";

export const open = (key) => reducerAction(BACKDROP_OPEN,{key});

export const close = (key) => reducerAction(BACKDROP_CLOSE,{key});

export const changeContent = (content) => reducerAction(BACKDROP_CHANGE_CONTENT,{
   content
});

export const addBackdrop = (key,content=null,show=false,closable=false) => reducerAction(BACKDROP_ADD_BACKDROP,{
   key,content,show,closable
});

export const removeBackdrop = (key) => reducerAction(BACKDROP_REMOVE_BACKDROP,{
   key
});

export const popBackdrop = (repetition=1)=>reducerAction(BACKDROP_POP_REPETATION,{
   repetition
})

export const appendConfigureAnimate = (configure) => reducerAction(BACKDROP_APPEND_CONGIURE,{
   configure
});

export const appendBackdropStyle = (backdropStyle) => reducerAction(BACKDROP_APPEND_BACKDROPSTYLE,{
   backdropStyle
});