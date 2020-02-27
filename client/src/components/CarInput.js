import React from 'react'
import { connect } from 'react-redux'
import { addCar } from '../actions/addCar'

class CarInput extends React.Component {
  state = {
    make: '',
    model: '',
    year: '',
    color: '',
    price: ''
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addCar(this.state, this.props.dealership.id)
    this.setState({
      make: '',
      model: '',
      year: '',
      color: '',
      price: ''
    })
  }

  render() {
    const divStyle = {
      marginTop: '30px'
    }
    return (

        <div style={divStyle}>
        <form onSubmit={this.handleOnSubmit}>
          <h2> New Car </h2>
          <label> Make: </label>
          <input
            type="text"
            name="make"
            value={this.state.make}
            placeholder="Make of car"
            onChange={this.handleOnChange}/><br></br><br></br>

          <label> Model: </label>
          <input
            type="text"
            name="model"
            value={this.state.model}
            placeholder="Model of car"
            onChange={this.handleOnChange}/><br></br><br></br>

          <label> Year: </label>
          <input
            type="number"
            name="year"
            value={this.state.year}
            placeholder="Year of car"
            onChange={this.handleOnChange}/><br></br><br></br>

          <label> Color: </label>
          <input
            type="text"
            name="color"
            value={this.state.color}
            placeholder="Color of car"
            onChange={this.handleOnChange}/><br></br><br></br>

          <label> Price: </label>
          <input
            type="number"
            name="price"
            value={this.state.price}
            placeholder="Price of car"
            onChange={this.handleOnChange}/><br></br><br></br>

          <input type="submit"/><br></br><br></br>
        </form>
      </div>

    )

  }


}

export default connect(null, {addCar} )(CarInput)
