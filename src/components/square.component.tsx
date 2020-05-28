import React, { FunctionComponent } from 'react'

import { SquareProps } from './../types'

const Square: FunctionComponent<SquareProps> = (props) => {
  return (
    <button 
      className='square'
      onClick={props.callback}
    >
      { props.value }
    </button>
  )
}

export default Square