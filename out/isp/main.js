"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/
var messaging_1 = require("./services/messaging");
var order_1 = require("./classes/order");
var persistency_1 = require("./services/persistency");
var product_1 = require("./classes/product");
var shopping_cart_1 = require("./classes/shopping-cart");
var discount_1 = require("./classes/discount");
var customer_1 = require("./classes/customer");
var fiftyPercentDiscount = new discount_1.FiftyPercentDiscount();
var tenPercentDiscount = new discount_1.TenPercentDiscount();
var thirtyPercentDiscount = new discount_1.ThirtyPercentDiscount();
var noDiscount = new discount_1.NoDiscount();
var shoppingCart = new shopping_cart_1.ShoppingCart(noDiscount);
var messaging = new messaging_1.Messaging();
var persistency = new persistency_1.Persistency();
var individualCustomer = new customer_1.IndividualCustomer('Nathan', 'Santos', '000.111.000-11');
var enterpriseCustomer = new customer_1.EnterpriseCustomer('ISP SOLUTION', '00011100011/0001');
var order = new order_1.Order(shoppingCart, messaging, persistency, enterpriseCustomer);
shoppingCart.addItem(new product_1.Product('Camiseta', 49.91));
shoppingCart.addItem(new product_1.Product('Caderno', 9));
shoppingCart.addItem(new product_1.Product('Lápis', 1.59));
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
//# sourceMappingURL=main.js.map