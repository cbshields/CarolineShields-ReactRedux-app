import React from 'react';
import { connect } from 'react-redux'
import DealershipsContainer from './containers/DealershipsContainer'

class App extends React.Component {

 // Good way to check your data can actually be displayed
 //  componentDidMount() {
 //    fetch('http://localhost:3001/api/v1/dealerships')
 //     .then(response => response.json())
 //     .then(data => console.log(data))
 //  }

 componentDidMount(){

 }


  render() {
    return (
      <div className="App">
        <DealershipsContainer />
      </div>
    )
  }
}

export default connect()(App);
