
export default function dealershipReducer(state = {dealerships: []}, action) {

  switch (action.type) {
    case 'FETCH_DEALERSHIPS':
      return {dealerships: action.payload}
    case 'ADD_DEALERSHIP':
        return {...state,
        dealerships: [...state.dealerships, action.payload]}
    case 'ADD_CAR':
      let dealerships = state.dealerships.map(dealership => {
        if (dealership.id === action.payload.id) {
          return action.payload
        } else {
          return dealership
        }
      })
      return {...state, dealerships: dealerships}
    case 'DELETE_CAR':
     debugger
      let dealerships2 = state.dealerships.map(dealership => {
        if (dealership.id === action.payload.id) {
          return action.payload
        } else {
          return dealership
        }
      })
      debugger
      return {...state, dealerships: dealerships2}
    default:
      return state

  }

}
