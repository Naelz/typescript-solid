"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartLegacy = void 0;
var ShoppingCartLegacy = /** @class */ (function () {
    function ShoppingCartLegacy() {
        this._items = [];
        this.orderStatus = 'open';
    }
    ShoppingCartLegacy.prototype.addItem = function (item) {
        this._items.push(item);
    };
    ShoppingCartLegacy.prototype.removeItem = function (index) {
        this._items.splice(index, 1);
    };
    Object.defineProperty(ShoppingCartLegacy.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    ShoppingCartLegacy.prototype.total = function () {
        return +this._items.reduce(function (total, next) { return total + next.price; }, 0).toFixed(2);
    };
    ShoppingCartLegacy.prototype.checkout = function () {
        if (this.isEmpty()) {
            console.log('Seu pedido foi recebido.');
            return;
        }
        this.orderStatus = 'closed';
        this.sendMessage("Seu pedido com total de ".concat(this.total(), " foi recebido."));
        this.saveOrder();
        this.clear();
    };
    ShoppingCartLegacy.prototype.isEmpty = function () {
        return this._items.length === 0;
    };
    ShoppingCartLegacy.prototype.sendMessage = function (msg) {
        console.log('Mensagem enviada:', msg);
    };
    ShoppingCartLegacy.prototype.saveOrder = function () {
        console.log('Pedido salvo com sucesso...');
    };
    ShoppingCartLegacy.prototype.clear = function () {
        console.log('Carrinho de compras foi limpo...');
        this._items.length = 0;
    };
    return ShoppingCartLegacy;
}());
exports.ShoppingCartLegacy = ShoppingCartLegacy;
var shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Camiseta', price: 49.91 });
shoppingCart.addItem({ name: 'Caderno', price: 9.9123 });
shoppingCart.addItem({ name: 'Lápis', price: 1.59 });
console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
//# sourceMappingURL=shopping-cart-legacy.js.map