import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './index.css'

interface SquareProps { value: null | string, callback: () => void }
interface DefaultValues { X: string, O: string }
interface DefaultState { board: Array<null | string>, isXNext: boolean }

const DEFAULT_VALUES: DefaultValues = { X: 'X', O: 'O' }
const DEFAULT_STATE: DefaultState = { board: Array(9).fill(null), isXNext: true }

function Square (props: SquareProps): JSX.Element {
  return (
   <button className='square' onClick={props.callback}>
     { props.value }
   </button> 
  )
}

function getStatus (data: DefaultState): string {
  const winner = calculateWinner(data.board)
  return (winner ? `${winner} à gagné` : `Next player: ${data.isXNext ? 'X' : 'O'}`)
}

function Board (): JSX.Element {
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
        <div className="status">{ status }</div>
        <div className="board-row">
          { renderSquare(0) }
          { renderSquare(1) }
          { renderSquare(2) }
        </div>
        <div className="board-row">
          { renderSquare(3) }
          { renderSquare(4) }
          { renderSquare(5) }
        </div>
        <div className="board-row">
          { renderSquare(6) }
          { renderSquare(7) }
          { renderSquare(8) }
        </div>
      </div>
  )
}

function Game (): JSX.Element {
  return (
    <div className='game'>
      <div className='game-board'>
        <Board/>
      </div>
      <div className='game-info'>
        <div>{/* status */}</div>
        <ol>{/*  TODO */}</ol>
      </div>
    </div>
  )
}

function calculateWinner (squares: Array<null | string>): string | null {
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

// ========================================
ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
