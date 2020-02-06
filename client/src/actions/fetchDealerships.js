
export function fetchDealerships() {

  return (dispatch) => {
  
    fetch('http://localhost:3001/api/v1/dealerships')
        .then(response => response.json())
        .then(dealerships => dispatch({type: 'FETCH_DEALERSHIPS', payload: dealerships}))

    }
}
