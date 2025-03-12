

//ACTION TYPES
export const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
export const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'
export const ICECREAM_PRICE = 'ICECREAM_PRICE'

//action object
const initialState = {
  numberOfIceCreams: 25,
  info: 'All are Kulfi flavored',
  price: 10
}

//Action creators
export function orderIceCream() {
  return {
    type: 'ICECREAM_ORDERED'
  }
}
export function restockIceCream(qty) {
  return {
    type: 'ICECREAM_RESTOCKED',
    payload: qty
  }
}
export function priceIceCream(price) {
  return {
    type: 'ICECREAM_PRICE',
    payload: price
  }
}


//REDUCER FUNCTIONS
export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state, numberOfIceCreams: state.numberOfIceCreams - 1
      }
    case ICECREAM_RESTOCKED:
      return {
        ...state, numberOfIceCreams: state.numberOfIceCreams + action.payload
      }
    case ICECREAM_PRICE:
      return {
        ...state, price: state.price + action.payload
      }

    default:
      return state
  }
}