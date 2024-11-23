import React from 'react'
import { NestedInterface } from './Interfaces/Interface.SOLID'

const LiskovTheory:React.FC<NestedInterface> = ({address, ...rest}) => {
  return (
    <>
        <h1>{address.country}</h1>
        <h1>{address.city}</h1>
        <h1>{address.street}</h1>
        <h1>{address.number}</h1>
        <h1>{rest.person}</h1>
    </> 
  )
}

export default LiskovTheory
