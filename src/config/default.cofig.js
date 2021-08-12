import { Player } from "../models";
import {CircleShape,TimesShape} from "../components/shape" 
const gameConfigs = require("./game.config.json");
const {player1,player2} = gameConfigs;

export const defaultGameCfig = {
   ...gameConfigs,
   player1:new Player(
      1,
      player1.name,
      player1.score,
      player1.color
      ,CircleShape
   ),
   player2:new Player(
      2,
      player2.name,
      player2.score,
      player2.color
      ,TimesShape
   ),
}
export {gameConfigs}