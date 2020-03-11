export const deleteDealership = (dealershipId) => {
    console.log(dealershipId)
    return (dispatch) => {
     return fetch(`http://localhost:3001/api/v1/dealerships/${dealershipId}`, {
       method: 'delete'
     })
     .then(response => response.json())
     .then(dealership => dispatch({type: 'DELETE_DEALERSHIP', payload: dealership})
      )
    }

}
