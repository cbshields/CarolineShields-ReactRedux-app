import React from 'react'
import CarsContainer from '../containers/CarsContainer'
// import {Redirect} from 'react-router-dom'

const Dealership = (props) => {

  //let dealership = props.dealerships[props.match.params.id - 1]

  let dealership = props.dealerships.filter(dealership => dealership.id == props.match.params.id)[0]

  return (
    <div>
      <h2>
        {dealership ? dealership.name : null} - {dealership ? dealership.city : null} {dealership ? dealership.state : null}
      </h2>
      <h3>Inventory: {dealership ? dealership.inventory : null}</h3>
      <CarsContainer dealership={dealership}/>
    </div>
  )

}

export default Dealership
