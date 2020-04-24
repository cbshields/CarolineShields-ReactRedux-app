
export default function dealershipReducer(state = {dealerships: []}, action) {

  switch (action.type) {
    case 'FETCH_DEALERSHIPS':
      return {dealerships: action.payload}
    case 'ADD_DEALERSHIP':
      return {...state,
        dealerships: [...state.dealerships, action.payload]}
    case 'EDIT_DEALERSHIP':
      let dealerships3 = state.dealerships.map(dealership => {

          if (dealership.id === action.id) {
            return {...dealership, editing: !dealership.editing}
            } else {
              return dealership
            }
            })
      return {...state, dealerships: dealerships3}
    case 'UPDATE_DEALERSHIP':
        let dealerships4 = state.dealerships.map(dealership => {
          if (dealership.id === action.payload.id) {
            return action.payload
          } else {
            return dealership
          }
        })
        return {...state, dealerships: dealerships4}
    case 'DELETE_DEALERSHIP':
        let dealerships5 = state.dealerships.filter(dealership => {
          if (dealership.id != action.payload) {
            return dealership
          }
        })
        return {...state, dealerships: dealerships5}
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
      let dealerships2 = state.dealerships.map(dealership => {
        if (dealership.id === action.payload.id) {
          return action.payload
        } else {
          return dealership
        }
      })
      return {...state, dealerships: dealerships2}
    default:
      return state

  }

}
