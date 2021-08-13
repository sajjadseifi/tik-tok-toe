import { useDispatch, useSelector } from "../shared/base-hook";
import { TikTokToeContext,TikTokToeProvider } from "../context"

export const useTikTokToeDispatch = () =>
 useDispatch(TikTokToeContext, "useTikTokToeDispatch", TikTokToeProvider.name)

export const useTikTokToeSeletor = (cb = (state) => state) =>
   useSelector(TikTokToeContext, "useTikTokToeDispatch", TikTokToeProvider.name, cb)