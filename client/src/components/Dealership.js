import React from 'react'
import { connect } from 'react-redux'
import CarsContainer from '../containers/CarsContainer'
import DealershipEdit from './DealershipEdit'
// import {Redirect} from 'react-router-dom'

const Dealership = (props) => {

  const divStyle = {
    marginTop: '30px'
  }
  let dealership = props.dealerships.filter(dealership => dealership.id == props.match.params.id)[0]
  return (
    <div style={divStyle}>
      <h2>
        {dealership ? dealership.name : null} - {dealership ? dealership.city : null} {dealership ? dealership.state : null} {dealership && !dealership.editing ? <button onClick={()=> props.dispatch({type:'EDIT_DEALERSHIP',id:dealership.id})}>EDIT</button> : null}
      </h2>
       {dealership ? <h3>Inventory: {dealership.inventory} </h3>: null}

      {dealership && dealership.editing ? <DealershipEdit dealership={dealership} key={dealership.id} /> : <CarsContainer dealership={dealership}/> }

    </div>
  )

}

export default connect()(Dealership)
