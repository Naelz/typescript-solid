"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this._items = [];
        this.orderStatus = 'open';
    }
    ShoppingCart.prototype.addItem = function (item) {
        this._items.push(item);
    };
    ShoppingCart.prototype.removeItem = function (index) {
        this._items.splice(index, 1);
    };
    Object.defineProperty(ShoppingCart.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    ShoppingCart.prototype.total = function () {
        return +this._items.reduce(function (total, next) { return total + next.price; }, 0).toFixed(2);
    };
    ShoppingCart.prototype.checkout = function () {
        if (this.isEmpty()) {
            console.log('Seu pedido foi recebido.');
            return;
        }
        this.orderStatus = 'closed';
        this.sendMessage('Seu pedido foi recebido.');
        this.saveOrder();
        this.clear();
    };
    ShoppingCart.prototype.isEmpty = function () {
        return this._items.length === 0;
    };
    ShoppingCart.prototype.sendMessage = function (msg) {
        console.log('Mensagem enviada:', msg);
    };
    ShoppingCart.prototype.saveOrder = function () {
        console.log('Pedido salvo com sucesso...');
    };
    ShoppingCart.prototype.clear = function () {
        console.log('Carrinho de compras foi limpo...');
        this._items.length = 0;
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
var shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.91 });
shoppingCart.addItem({ name: 'Caderno', price: 9.9123 });
shoppingCart.addItem({ name: 'Lápis', price: 1.59 });
console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
//# sourceMappingURL=shopping-cart.js.map