"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_entity_1 = require("./base.entity");
var lookup_entity_1 = require("./lookup.entity");
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Client;
}(base_entity_1.BaseEntity));
exports.Client = Client;
var ClientRisk = /** @class */ (function (_super) {
    __extends(ClientRisk, _super);
    function ClientRisk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClientRisk;
}(lookup_entity_1.Lookup));
exports.ClientRisk = ClientRisk;
var ClientStatus = /** @class */ (function (_super) {
    __extends(ClientStatus, _super);
    function ClientStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClientStatus;
}(lookup_entity_1.Lookup));
exports.ClientStatus = ClientStatus;
//# sourceMappingURL=client.entity.js.map