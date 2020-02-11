export const updateDealership = (data) => {
   return (dispatch) => {
     fetch(`http://localhost:3001/api/v1/dealerships/${data.id}`, {
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
       method: 'PATCH',
       body: JSON.stringify(data)
     })
     .then(response => response.json())
     .then(dealership => dispatch({type: 'UPDATE_DEALERSHIP', payload: dealership}) )
   }
}
