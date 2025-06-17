"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterpriseCustomer = exports.IndividualCustomer = void 0;
var IndividualCustomer = /** @class */ (function () {
    function IndividualCustomer(firstName, lastName, cpf) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
        this.cnpj = '';
    }
    IndividualCustomer.prototype.getName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    IndividualCustomer.prototype.getIDN = function () {
        return this.cpf;
    };
    return IndividualCustomer;
}());
exports.IndividualCustomer = IndividualCustomer;
var EnterpriseCustomer = /** @class */ (function () {
    function EnterpriseCustomer(name, cnpj) {
        this.name = name;
        this.cnpj = cnpj;
    }
    EnterpriseCustomer.prototype.getName = function () {
        return this.name;
    };
    EnterpriseCustomer.prototype.getIDN = function () {
        return this.cnpj;
    };
    return EnterpriseCustomer;
}());
exports.EnterpriseCustomer = EnterpriseCustomer;
//# sourceMappingURL=customer.js.map