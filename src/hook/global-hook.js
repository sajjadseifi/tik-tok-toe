import {  useSelector } from "../shared/base-hook";
import { GlobalContext,GlobalProvider} from "../context/global-context";

// export const useTikTokToeDispatch = () =>
//  useDispatch(GlobalContext, "useTikTokToeDispatch", GlobalProvider.name)

export const useGlobalSeletor = (cb = (state) => state) =>
   useSelector(GlobalContext, "useGlobalSeletor", GlobalProvider.name, cb)