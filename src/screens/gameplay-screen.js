import React from 'react'
import { StyleSheet } from 'react-native'
import { color } from '../constants'
import { Player } from '../models'
import { GameProvider } from '../context/game-context'
import { Game } from '../components/game/game'

const player1 =new Player(1,"sajjad",0,color.hotpink);
const player2 =new Player(2,"reza",0,color.lightblue);

export const GamePlayScreen = () => {
  
  return (
    <GameProvider
      player1={player1}
      player2={player2}
    >
      <Game/>
    </GameProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:30,
  }
})
