import React from 'react'

import Board from './board.component'

export default function Game (): JSX.Element {
  return (
    <div className='game'>
      <div className='game-board'>
        <Board/>
      </div>
      <div className='game-info'>
        <div>{ /* status */ }</div>
        <ol>{ /* TODO */ }</ol>
      </div>
    </div>
  )
}