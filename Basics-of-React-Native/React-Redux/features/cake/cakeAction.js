

//ACTION TYPES
export const CAKE_ORDERED = 'CAKE_ORDERED'
export const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
export const CAKE_PRICE = 'CAKE_PRICE'

//action object
const initialState = {
  numberOfCakes: 15,
  info: 'All are chocolate flavored',
  price: 0
}

//Action creators
export function orderCake() {
  return {
    type: 'CAKE_ORDERED'
  }
}
export function restockCake(qty) {
  return {
    type: 'CAKE_RESTOCKED',
    payload: qty
  }
}
export function priceCake(price) {
  return {
    type: 'CAKE_PRICE',
    payload: price
  }
}


//REDUCER FUNCTIONS
export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state, numberOfCakes: state.numberOfCakes - 1
      }
    case CAKE_RESTOCKED:
      return {
        ...state, numberOfCakes: state.numberOfCakes + action.payload
      }
    case CAKE_PRICE:
      return {
        ...state, price: state.price + action.payload
      }

    default:
      return state
  }
}