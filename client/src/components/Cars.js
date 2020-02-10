import React from 'react'

const Cars = (props) => {

  return (

    <div>
      {props.cars && props.cars.map(car =>
        <li key={car.id}>{car.make} {car.model} {car.year} {car.color} - ${car.price} </li>
      )}
    </div>

  )


}

export default Cars
