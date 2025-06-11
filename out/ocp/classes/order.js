"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(cart, messaging, persistency) {
        this.cart = cart;
        this.messaging = messaging;
        this.persistency = persistency;
        this._orderStatus = 'open';
    }
    Object.defineProperty(Order.prototype, "orderStatus", {
        get: function () {
            return this._orderStatus;
        },
        enumerable: false,
        configurable: true
    });
    Order.prototype.checkout = function () {
        if (this.cart.isEmpty()) {
            console.log('Seu pedido foi recebido.');
            return;
        }
        this._orderStatus = 'closed';
        this.messaging.sendMessage("Seu pedido com total de ".concat(this.cart.totalWithDiscount(), " foi recebido."));
        this.persistency.saveOrder();
        this.cart.clear();
    };
    return Order;
}());
exports.Order = Order;
;
//# sourceMappingURL=order.js.map