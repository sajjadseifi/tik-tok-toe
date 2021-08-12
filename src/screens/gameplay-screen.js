import React from 'react'
import { StyleSheet } from 'react-native'
import { color } from '../constants'
import { Player } from '../models'
import { GameProvider } from '../context/game-context'
import { Game } from '../components/game/game'
import { CircleShape } from '../components/shape'
import { TimesShape } from '../components/shape/times-shape'

// const player1 =new Player(1,"sajjad",0,color.hotpink,CircleShape);
// const player2 =new Player(2,"reza",0,color.lightblue,TimesShape);

export const GamePlayScreen = () => {
  return (
    <GameProvider>
      <Game/>
    </GameProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:30,
  }
})
