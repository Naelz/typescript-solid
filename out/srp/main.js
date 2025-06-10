"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shopping_cart_1 = require("./shopping-cart");
var shoppingCart = new shopping_cart_1.ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.91 });
shoppingCart.addItem({ name: 'Caderno', price: 9 });
shoppingCart.addItem({ name: 'Lápis', price: 1.59 });
console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
//# sourceMappingURL=main.js.map