
// export function add(a=0, b=0) {
//     if(typeof a != 'number' || typeof b !='number'){
//         return 0;
//  }
    

//     return a + b;
// }

// export function sub(a=0,b=0){
//     return a-b;
// }
// src/shoppingCart.js
export class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemName);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getItemCount() {
        return this.items.length;
    }

    getItems() {
        return this.items;
    }
}
