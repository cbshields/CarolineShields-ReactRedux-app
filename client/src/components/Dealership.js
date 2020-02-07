import React from 'react'
import CarsContainer from '../containers/CarsContainer'
// import {Redirect} from 'react-router-dom'

const Dealership = (props) => {

  let dealership = props.dealerships[props.match.params.id - 1]

  return (
    <div>
      <h2>
        {dealership ? dealership.name : null} - {dealership ? dealership.city : null} {dealership ? dealership.state : null}
      </h2>
      <CarsContainer dealership={dealership}/>
    </div>
  )

}

export default Dealership
