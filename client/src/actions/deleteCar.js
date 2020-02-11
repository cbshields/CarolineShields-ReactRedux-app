export const deleteCar = (carId, dealershipId) => {
   return (dispatch) => {
    return fetch(`http://localhost:3001/api/v1/dealerships/${dealershipId}/cars/${carId}`, {
      method: 'delete'
    })
    .then(response => response.json())
    .then(dealership => dispatch({type: 'DELETE_CAR', payload: dealership})
     )
   }
}
