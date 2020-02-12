import React from 'react';
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import { fetchDealerships } from '../actions/fetchDealerships'
import DealershipInput from '../components/DealershipInput'
import Dealerships from '../components/Dealerships'
import Dealership from '../components/Dealership'


class DealershipsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchDealerships()
  }


  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/dealerships/new' component={DealershipInput} />
          <Route path='/dealerships/:id' render={(routerProps) => <Dealership {...routerProps} dealerships={this.props.dealerships}/>} />
          <Route exact path='/dealerships' render={(routerProps) => <Dealerships {...routerProps} dealerships={this.props.dealerships}/>} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dealerships: state.dealerships
  }
}

export default connect(mapStateToProps, {fetchDealerships})(DealershipsContainer)
