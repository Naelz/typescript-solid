"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messaging_1 = require("./services/messaging");
var order_1 = require("./entities/order");
var persistency_1 = require("./services/persistency");
var product_1 = require("./entities/product");
var shopping_cart_1 = require("./entities/shopping-cart");
var shoppingCart = new shopping_cart_1.ShoppingCart();
var messaging = new messaging_1.Messaging();
var persistency = new persistency_1.Persistency();
var order = new order_1.Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new product_1.Product('Camiseta', 49.91));
shoppingCart.addItem(new product_1.Product('Caderno', 9));
shoppingCart.addItem(new product_1.Product('Lápis', 1.59));
console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
//# sourceMappingURL=main.js.map