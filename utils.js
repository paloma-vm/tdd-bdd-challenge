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
  console.log(shoppingCart)
  return shoppingCart
}

// ---- STRETCH CHALLENGES -------------------------------
const updateItemQty = (itemName, qtyChange) => {
  // should update the quantity of item with name == itemName in the cart
  for (let i = 0; i < shoppingCart.length; i += 1) {
    if (shoppingCart[i].name === itemName) {
      shoppingCart[i].quantity += Number(qtyChange)
      console.log(typeof shoppingCart[i].quantity)
      console.log(`You changed the quantity of ${itemName} by ${qtyChange}`)
      break
    } // add else statements to plan for name not in cart, no negative total quantities
  }
  console.log(shoppingCart)
  return shoppingCart
  
}

// -----------------------------------


module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, updateItemQty // remember to add stretch functions here!
}
