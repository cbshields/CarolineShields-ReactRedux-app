import React from 'react'
import {Link} from 'react-router-dom'
// import Dealership from './Dealership'

const Dealerships = (props) => {

  return (
    <div>
      {props.dealerships.map(dealership =>
        <li key={dealership.id}><Link to={`/dealerships/${dealership.id}`}>{dealership.name}</Link></li>)}
    </div>
  )

}

export default Dealerships
