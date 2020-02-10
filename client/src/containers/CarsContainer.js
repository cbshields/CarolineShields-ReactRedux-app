import React from 'react'
import CarInput from '../components/CarInput'
import Cars from '../components/Cars'

class CarsContainer extends React.Component {


  render() {
    return (

      <div>
        <CarInput dealership = {this.props.dealership}/>
        <Cars cars={this.props.dealership && this.props.dealership.cars}/>
      </div>


    )
  }

}

export default CarsContainer
