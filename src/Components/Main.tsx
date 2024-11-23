import React from 'react'
import { LoskovPrinciple } from './Interfaces/Interface.SOLID'

const Main:React.FC<LoskovPrinciple> = ({person, lastname}) => {
  return (
    <>
      <h1>{person}</h1>
      <h1>{lastname}</h1>
    </>
  )
}

export default Main
