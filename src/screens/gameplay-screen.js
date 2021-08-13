import React from 'react'
import { GameProvider } from '../context/game-context'
import { Game } from '../components/game/game'
import { GameLoading } from '../components/Loading/game-loading';

export const GamePlayScreen = () => {
  return (
    <GameLoading>
      <GameProvider>
        <Game/>
      </GameProvider>
    </GameLoading>
  )
};