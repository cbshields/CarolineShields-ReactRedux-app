import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteDealership } from '../actions/deleteDealership'
// import Dealership from './Dealership'

const Dealerships = (props) => {
  const divStyle = {
    marginTop: '30px'
  }

  const liStyle = {
    paddingTop: '10px'
  }

  const handleDelete = (dealership) => {
    props.deleteDealership(dealership.id)
  }

  return (
    <div style={divStyle}>
      <Link to='/dealerships/new'>Create New Dealership</Link><br></br><br></br>
      {props.dealerships.map(dealership =>
         <li style={liStyle} key={dealership.id}><Link to={`/dealerships/${dealership.id}`}>{dealership.name}</Link>    <button onClick={() => handleDelete(dealership)}>DELETE</button></li>)}
    </div>
  )

}

export default connect(null, {deleteDealership})(Dealerships)
