import React from 'react'
import { connect } from 'react-redux'
import CarsContainer from '../containers/CarsContainer'
import DealershipEdit from './DealershipEdit'
// import {Redirect} from 'react-router-dom'

const Dealership = (props) => {

  console.log(props)
  let dealership = props.dealerships.filter(dealership => dealership.id == props.match.params.id)[0]

  return (
    <div>
      <h2>
        {dealership ? dealership.name : null} - {dealership ? dealership.city : null} {dealership ? dealership.state : null} <button onClick={()=> props.dispatch({type:'EDIT_DEALERSHIP',id:dealership.id})}>EDIT</button>
      </h2>
      <h3>Inventory: {dealership ? dealership.inventory : null}</h3>

      {dealership && dealership.editing ? <DealershipEdit dealership={dealership} key={dealership.id} /> : <CarsContainer dealership={dealership}/> }

    </div>
  )

}

export default connect()(Dealership)
