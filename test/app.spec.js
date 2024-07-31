// import assert from 'assert';
// import { expect } from 'chai';
// import { add } from '../src/app.js';
// import { sub } from '../src/app.js';
// import { describe, it } from 'mocha';

// describe('The add function', () => {
//     it('should add 2 numbers together', () => {
//         const result = add(2, 2);
//         assert.equal(result, 4);
//         // expect(result).to.be.equal(4);
//         // result.should.equal(4);
//     });

//     it("should be able to add one number", () => {
//         const result=add(2)
//         expect(result).to.be.equal(2)

//     })

//     it("should take only numbers", () =>{
//         const result=add(2,'test')
//         expect(result).to.be.eq(0)
//     });

//     it("should be able to handle no inputs", ()=>{
//         const result=sub();
//         expect(result).to.be.equal(0);
//     });

// });

// describe('The sub function', () => {
//     it('should sub 2 numbers ', () => {
//         const result = sub(2, 2);
//         //assert.equal(result, 5);
//         expect(result).to.be.equal(0);
//     });

//     it("should be able to sub one number", () => {
//         const result=sub(2)
//         expect(result).to.be.equal(2)

//     })

//     it("should take only numbers", () =>{
//         const result=sub(2,'test')
//         expect(result).to.be.eq(0)
//     });

//     it("should be able to handle no inputs", ()=>{
//         const result=sub();
//         expect(result).to.be.equal(0);
//     });

// });
// test/shoppingCart.test.js
import { expect } from "chai";
import { ShoppingCart } from "../src/app.js";

describe("ShoppingCart", function () {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  it("should add items to the cart", function () {
    cart.addItem({ name: "Apple", price: 1.0 });
    cart.addItem({ name: "Banana", price: 0.5 });
    expect(cart.getItemCount()).to.equal(3);
  });

  it("should remove items from the cart", function () {
    cart.addItem({ name: "Apple", price: 1.0 });
    cart.addItem({ name: "Banana", price: 0.5 });
    cart.removeItem("Apple");
    expect(cart.getItemCount()).to.equal(1);
    expect(cart.getItems()[0].name).to.equal("Banana");
  });

  it("should calculate the total price of items in the cart", function () {
    cart.addItem({ name: "Apple", price: 1.0 });
    cart.addItem({ name: "Banana", price: 0.5 });
    expect(cart.getTotal()).to.equal(1.5);
  });

  it("should return the correct number of items", function () {
    cart.addItem({ name: "Apple", price: 1.0 });
    cart.addItem({ name: "Banana", price: 0.5 });
    expect(cart.getItemCount()).to.equal(2);
  });

  it("should return all items in the cart", function () {
    cart.addItem({ name: "Apple", price: 1.0 });
    cart.addItem({ name: "Banana", price: 0.5 });
    const items = cart.getItems();
    expect(items).to.have.lengthOf(2);
    expect(items[0].name).to.equal("Apple");
    expect(items[1].name).to.equal("Banana");
  });
});
