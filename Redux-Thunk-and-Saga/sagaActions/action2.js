

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const CAKE_PRICE = 'CAKE_PRICE';

function ordered(params) {
  return {
    type: 'CAKE_ORDERED'
  }
}

function restocked(qty) {
  return {
    type: 'CAKE_ORDERED', payload: qty
  }
}

function priceOfCake(pr) {
  return {
    type: 'CAKE_PRICE',
    payload: pr
  }
}