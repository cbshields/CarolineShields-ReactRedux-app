import React from 'react'
import {Link} from 'react-router-dom'
// import Dealership from './Dealership'

const Dealerships = (props) => {
  const divStyle = {
    marginTop: '30px'
  }

  return (
    <div style={divStyle}>
      <Link to='/dealerships/new'>Create New Dealership</Link><br></br><br></br>
      {props.dealerships.map(dealership =>
         <li key={dealership.id}><Link to={`/dealerships/${dealership.id}`}>{dealership.name}</Link></li>)}
    </div>
  )

}

export default Dealerships
