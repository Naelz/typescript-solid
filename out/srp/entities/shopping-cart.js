"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this._items = [];
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
    ShoppingCart.prototype.isEmpty = function () {
        return this._items.length === 0;
    };
    ShoppingCart.prototype.clear = function () {
        console.log('Carrinho de compras foi limpo...');
        this._items.length = 0;
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
//# sourceMappingURL=shopping-cart.js.map