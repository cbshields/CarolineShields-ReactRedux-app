export const deleteDealership = (dealershipId) => {
  
    return (dispatch) => {
      fetch(`http://localhost:3001/api/v1/dealerships/${dealershipId}`, {
       method: 'delete'
     })
     .then(response => {
       if(response.ok) dispatch({type: 'DELETE_DEALERSHIP', payload: dealershipId})
     }
      )
    }

}
