"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Liskov substitution principle (Princípio da substituição de Liskov) -
Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y)
deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
Mais simples ainda: Se meu programa espera um Animal, algo do tipo
Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
*/
var messaging_1 = require("./services/messaging");
var order_1 = require("./classes/order");
var persistency_1 = require("./services/persistency");
var product_1 = require("./classes/product");
var shopping_cart_1 = require("./classes/shopping-cart");
var discount_1 = require("./classes/discount");
var fiftyPercentDiscount = new discount_1.FiftyPercentDiscount();
var tenPercentDiscount = new discount_1.TenPercentDiscount();
var thirtyPercentDiscount = new discount_1.ThirtyPercentDiscount();
var noDiscount = new discount_1.NoDiscount();
var shoppingCart = new shopping_cart_1.ShoppingCart(noDiscount);
var messaging = new messaging_1.Messaging();
var persistency = new persistency_1.Persistency();
var order = new order_1.Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new product_1.Product('Camiseta', 49.91));
shoppingCart.addItem(new product_1.Product('Caderno', 9));
shoppingCart.addItem(new product_1.Product('Lápis', 1.59));
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
//# sourceMappingURL=main.js.map