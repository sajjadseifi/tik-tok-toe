import { useDispatch, useSelector } from "../base-hook";
import {BackDropContext,BackDropProvider} from "./backdrop-context"

export const useBackdropDispatch = () =>
useDispatch(BackDropContext, "useBackdropDispatch", BackDropProvider.name)

export const useBackdropSeletor = (cb = (state) => state) =>
  useSelector(BackDropContext, "useBackdropSeletor", BackDropProvider.name, cb)

