const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================
it("should return area of a rectangle", function() {
  const area = utils.area(2,3)
  expect(area).to.be.a("Number")
  expect(area).to.equal(6)
  // expect(area).with
})

it("should return perimeter of rectangle", function() {
  const perimeter = utils.perimeter(2,3)
  expect(perimeter).to.be.a("Number")
  expect(perimeter).to.equal(10)
  // expect(area).with
})

it("should return the area of a circle with radius", function() {
  const circleArea = utils.circleArea(3)
  expect(circleArea).to.be.a("Number")
  expect(circleArea).to.be.gt(28)
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  shoppingCart = utils.getShoppingCart()
  expect(shoppingCart).to.exist
  expect(shoppingCart).to.be.empty
})

it("Should add a new item to the shopping cart", function() {
  const newItem = utils.createItem("banana", 1.29)
  shoppingCart = utils.addItemToCart(newItem)

  expect(newItem).to.be.a("object")
  expect(shoppingCart).to.have.lengthOf(1)
  // console.log(shoppingCart)
  expect(shoppingCart).to.have.members([newItem])

})

it("Should return the number of items in the cart", function() {
  const item = utils.createItem("apple", 0.99)
  // shoppingCart = utils.addItemToCart(item)
  utils.addItemToCart(item) // don't need shoppingCart = 

  const numItems = utils.getNumItemsInCart()
  expect(numItems).to.be.a("Number")
  expect(numItems).to.be.gte(1)
})


it("Should remove items from cart", function() {
  const item1 = utils.createItem("apple", 0.99)
  const item2 = utils.createItem("banana", 1.29)
  const item3 = utils.createItem("orange", 1.49)
  shoppingCart = utils.addItemToCart(item1)
  shoppingCart = utils.addItemToCart(item2)
  utils.addItemToCart(item3)


  // const shoppingCart = utils.addItemToCart(item2)
  console.log(shoppingCart)

  shoppingCart = utils.removeItemFromCart(item1)
  expect(shoppingCart).to.include(item2)
  expect(shoppingCart).to.have.lengthOf(2)
  console.log(shoppingCart)

})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
