import React from 'react'

import "./Box.css"

export const Box = ({value,onclick}) => {
  const style=value=== "X"? "box x" : "box o";
  return (
    <button className={style} onclick={onclick}>{value}</button>
  )
}

  
  