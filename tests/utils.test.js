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
  const shoppingCart = utils.getShoppingCart()
  expect(shoppingCart).to.exist
  // expect(shoppingCart).to.be.a("object")
  expect(shoppingCart).to.be.empty
})

it("Should add a new item to the shopping cart", function() {
  const item = utils.addItemToCart("banana", 1.29)

  expect(item).to.be.a("object")
  expect(shoppingCart).to.include("banana")
})

it("Should return the number of items in the cart", function() {
  const numItems = utils.getNumItemsInCart()
  expect(numItems).to.be.a("Number")
  expect(numItems).to.be.gte(2)
})


it("Should remove items from cart", function() {
  const cart = utils.removeItemFromCart("apple")
  expect(cart).to.include("banana")
  expect(cart).to.have.lengthOf(1)
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
