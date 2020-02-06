
export default function dealershipReducer(state = {dealerships: []}, action) {
  switch (action.type) {
    case 'FETCH_DEALERSHIPS':
      return {dealerships: action.payload}
    default:
      return state

  }

}
