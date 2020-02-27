export const addDealership = (data, history) => {
  debugger
   return (dispatch) => {
     fetch('http://localhost:3001/api/v1/dealerships', {
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
       method: 'POST',
       body: JSON.stringify(data)
     })
     .then(response => response.json())
     .then(dealership => {
       dispatch({type: 'ADD_DEALERSHIP', payload: dealership})
       history.push(`/dealerships/${dealership.id}`)
     })
   }
}
