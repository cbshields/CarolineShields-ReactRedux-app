import React from 'react'
import { deleteCar } from '../actions/deleteCar'


const Cars = (props) => {
  console.log(props)

  const handleDelete = (car) => {
    debugger
    deleteCar(car.id, car.dealership_id)
  }

  return (

    <div>
      {props.cars && props.cars.map(car =>
        <li key={car.id}>{car.make} {car.model} {car.year} {car.color} - ${car.price} <button onClick={() => handleDelete(car)}>BUY IT</button></li>
      )}
    </div>

  )


}

export default Cars
