// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area
  return Number(w * h)
}

const perimeter = (w, h) => {
  // should return the perimeter
  return Number((2 * w) + (2 * h))
}

const circleArea = r => {
  // should return the area of the circle
  return Number(Math.PI * (r * r))
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  shoppingCart.push(item)
  return shoppingCart
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  return shoppingCart.length
  
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  const i = shoppingCart.indexOf(item)
  shoppingCart.splice(i, 1)

  return shoppingCart
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
