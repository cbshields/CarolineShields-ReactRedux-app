import React from 'react'
import Dealership from './Dealership'

const Dealerships = (props) => {

  return (
    <div>
      {props.dealerships.map(dealership =>
        <div key={dealership.id}><Dealership dealership={dealership} /></div>)}
    </div>
  )

}

export default Dealerships
