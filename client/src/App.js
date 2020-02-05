import React from 'react';

class App extends React.Component {

 // Good way to check your data can actually be displayed
 //  componentDidMount() {
 //    fetch('http://localhost:3001/api/v1/dealerships')
 //     .then(response => response.json())
 //     .then(data => console.log(data))
 //  }


  render() {
    return (
      <div className="App">
        App
      </div>
    )
  }
}

export default App;
