import React from 'react';
import { connect } from 'react-redux'
import { fetchDepartments } from './actions/fetchDepartments'

class App extends React.Component {

 // Good way to check your data can actually be displayed
 //  componentDidMount() {
 //    fetch('http://localhost:3001/api/v1/dealerships')
 //     .then(response => response.json())
 //     .then(data => console.log(data))
 //  }

 componentDidMount(){
   this.props.fetchDepartments({type: 'FETCH_DEPARTMENTS', payload: {name: 'Yo Mamas Cars'}})
 }


  render() {
    return (
      <div className="App">
        App
      </div>
    )
  }
}

export default connect(null,{fetchDepartments})(App);
