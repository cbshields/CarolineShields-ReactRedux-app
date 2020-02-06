import React from 'react';
import { connect } from 'react-redux'
import { fetchDealerships } from '../actions/fetchDealerships'
import DealershipInput from '../components/DealershipInput'
import Dealerships from '../components/Dealerships'


class DealershipsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchDealerships()
  }


  render(){
    return(
      <div>
        <DealershipInput />
        <Dealerships dealerships={this.props.dealerships}/>
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
