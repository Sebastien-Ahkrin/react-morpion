import React from 'react'

import { SquareProps } from './../types'

export default function Square (props: SquareProps): JSX.Element {
  return (
    <button 
      className='square'
      onClick={props.callback}
    >
      { props.value }
    </button>
  )
}