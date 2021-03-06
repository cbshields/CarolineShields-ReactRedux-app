import React from 'react'
import { connect } from 'react-redux'
import { deleteCar } from '../actions/deleteCar'


const Cars = (props) => {


  const handleDelete = (car) => {
    props.deleteCar(car.id, car.dealership_id)
  }

  return (

    <div>
    <h2> Available Cars </h2>
      {props.cars && props.cars.map(car =>
        <li key={car.id}>{car.make} {car.model} {car.year} {car.color} - ${car.price} <button onClick={() => handleDelete(car)}>SOLD</button></li>
      )}
    </div>

  )


}

export default connect(null,{deleteCar})(Cars)
