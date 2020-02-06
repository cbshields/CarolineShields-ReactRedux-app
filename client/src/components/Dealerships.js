import React from 'react'

const Dealerships = (props) => {

  return (
    <div>
      {props.dealerships.map(dealership => <li key={dealership.id}>{dealership.name} - {dealership.city} {dealership.state}</li>)}
    </div>
  )

}

export default Dealerships
