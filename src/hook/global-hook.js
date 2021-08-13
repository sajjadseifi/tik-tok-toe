import {  useSelector,useDispatch } from "../shared/base-hook";
import { GlobalContext,GlobalProvider} from "../context";

export const useGlobalDispatch = () =>
 useDispatch(GlobalContext, "useGlobalDispatch", GlobalProvider.name)

export const useGlobalSeletor = (cb = (state) => state) =>
   useSelector(GlobalContext, "useGlobalSeletor", GlobalProvider.name, cb)