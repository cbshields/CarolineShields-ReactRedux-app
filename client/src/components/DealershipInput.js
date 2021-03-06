import React from 'react'
import { connect } from 'react-redux'
import { addDealership } from '../actions/addDealership'

class DealershipInput extends React.Component {
  state = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    inventory: '',
    editing: false
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //Why can't you use setState([event.target.name]: '')
  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addDealership(this.state, this.props.history)
    this.setState({
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      inventory: '',
    })
  }


  render() {
    const divStyle = {
      marginTop: '30px'
    }
    return (
      <div style={divStyle}>
        <form onSubmit={this.handleOnSubmit}>
          <label> Dealership Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Dealership"
            onChange={this.handleOnChange}/><br></br><br></br>

          <label> Address: </label>
          <input
            type="text"
            name="address"
            value={this.state.address}
            placeholder="Address"
            onChange={this.handleOnChange}/><br></br><br></br>

          <label> City: </label>
          <input
            type="text"
            name="city"
            value={this.state.city}
            placeholder="City"
            onChange={this.handleOnChange}/><br></br><br></br>

          <label> State: </label>
          <input
            type="text"
            name="state"
            value={this.state.state}
            placeholder="State"
            onChange={this.handleOnChange}/><br></br><br></br>

          <label> Zip: </label>
          <input
            type="number"
            name="zip"
            value={this.state.zip}
            placeholder="Zip"
            onChange={this.handleOnChange}/><br></br><br></br>

          <label> Phone: </label>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            placeholder="Phone"
            onChange={this.handleOnChange}/><br></br><br></br>

          <label> Inventory: </label>
          <input
            type="number"
            name="inventory"
            value={this.state.inventory}
            placeholder="How many cars you got"
            onChange={this.handleOnChange}/><br></br><br></br>

          <input type="submit"/><br></br><br></br>
        </form>
      </div>
    )
  }
}

export default connect(null, {addDealership})(DealershipInput)
