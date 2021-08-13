import { useDispatch, useSelector } from "../shared/base-hook";
import { GameStateContext,GameProvider } from "../context"

export const useGamePlayDispatch = () =>
 useDispatch(GameStateContext, "useGamePlayDispatch", GameProvider.name)

export const useGamePlaySeletor = (cb = (state) => state) =>
   useSelector(GameStateContext, "useGamePlaySeletor", GameProvider.name, cb)