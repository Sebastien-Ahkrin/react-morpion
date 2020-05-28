import React, { useState, FunctionComponent } from 'react'

import Square from './square.component'

import { DefaultState, DefaultValues, NullOrString } from './../types'

const DEFAULT_STATE: DefaultState = { board: Array(9).fill(null), isXNext: true }
const DEFAULT_VALUES: DefaultValues = { X: 'X', O: 'O' }

function calculateWinner (squares: Array<NullOrString>): NullOrString {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
}

function getStatus (data: DefaultState): string {
  const winner = calculateWinner(data.board)
  return (winner ? `${winner} à gagné` : `Next player: ${data.isXNext ? 'X' : 'O'}`)
}

const Board: FunctionComponent = () => {
  const [data, setData] = useState(DEFAULT_STATE)
  const status = getStatus(data)

  function handleClick (i: number): void {
    const slice = data.board.slice()
    if (calculateWinner(data.board) || slice[i]) {
      return
    }

    slice[i] = data.isXNext ? DEFAULT_VALUES.X : DEFAULT_VALUES.O
    setData({ board: slice, isXNext: !data.isXNext })
  }

  function renderSquare (i: number): JSX.Element {
    return <Square value={data.board[i]} callback={() => handleClick(i)}/>
  }

  return (
    <div>
      <div className='status'>{ status }</div>
      <div className='board-row'>
        { renderSquare(0) }
        { renderSquare(1) }
        { renderSquare(2) }
      </div>
      <div className='board-row'>
        { renderSquare(3) }
        { renderSquare(4) }
        { renderSquare(5) }
      </div>
      <div className='board-row'>
        { renderSquare(6) }
        { renderSquare(7) }
        { renderSquare(8) }
      </div>
    </div>
  )
}

export default Board