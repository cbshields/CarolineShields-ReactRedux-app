export const deleteCar = (carId, dealershipId) => {
  debugger
   return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/dealerships/2/cars/11', {
      method: 'delete'
    })
    .then(response => response.json())
    .then(dealership => {
       debugger;
       dispatch({type: 'DELETE_CAR', payload: dealership})
     })
   }
}
