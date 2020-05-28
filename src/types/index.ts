type NullOrString = null | string

export interface DefaultState { 
  board: Array<NullOrString>, 
  isXNext: boolean 
}

export interface DefaultValues { 
  X: string, 
  O: string 
}

export interface SquareProps {
  value: NullOrString,
  callback: () => void
}
