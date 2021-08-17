import React from 'react'
import { GameProvider } from '../context/game-context'
import { Game as GamePlayMain } from '../components/game/game'
import { GameLoading } from '../components/Loading/game-loading';
import { statesGamePlay } from '../constants/app';

export const GamePlayScreen = ({
  playState=statesGamePlay.online,
}) => {

  return (
    <GameLoading>
      <GameProvider  playState={playState} >
        <GamePlayMain/>
      </GameProvider>
    </GameLoading>
  )
};