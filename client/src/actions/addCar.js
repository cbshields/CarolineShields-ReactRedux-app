export const addCar = (car,dealershipId) => {

   return (dispatch) => {
     fetch(`http://localhost:3001/api/v1/dealerships/${dealershipId}/cars`, {
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
       method: 'POST',
       body: JSON.stringify(car)
     })
     .then(response => response.json())
     .then(dealership => dispatch({type: 'ADD_CAR', payload: dealership}) )
   }
}
