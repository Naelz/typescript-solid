"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoDiscount = exports.ThirtyPercentDiscount = exports.TenPercentDiscount = exports.FiftyPercentDiscount = exports.Discount = void 0;
var Discount = /** @class */ (function () {
    function Discount() {
        this.discount = 0;
    }
    Discount.prototype.calculate = function (price) {
        return price - price * this.discount;
    };
    return Discount;
}());
exports.Discount = Discount;
;
var FiftyPercentDiscount = /** @class */ (function (_super) {
    __extends(FiftyPercentDiscount, _super);
    function FiftyPercentDiscount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.discount = 0.5;
        return _this;
    }
    return FiftyPercentDiscount;
}(Discount));
exports.FiftyPercentDiscount = FiftyPercentDiscount;
var TenPercentDiscount = /** @class */ (function (_super) {
    __extends(TenPercentDiscount, _super);
    function TenPercentDiscount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.discount = 0.1;
        return _this;
    }
    return TenPercentDiscount;
}(Discount));
exports.TenPercentDiscount = TenPercentDiscount;
var ThirtyPercentDiscount = /** @class */ (function (_super) {
    __extends(ThirtyPercentDiscount, _super);
    function ThirtyPercentDiscount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.discount = 0.3;
        return _this;
    }
    return ThirtyPercentDiscount;
}(Discount));
exports.ThirtyPercentDiscount = ThirtyPercentDiscount;
var NoDiscount = /** @class */ (function (_super) {
    __extends(NoDiscount, _super);
    function NoDiscount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoDiscount;
}(Discount));
exports.NoDiscount = NoDiscount;
//# sourceMappingURL=discount.js.map