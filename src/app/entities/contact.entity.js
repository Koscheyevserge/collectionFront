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
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Contact;
}(base_entity_1.BaseEntity));
exports.Contact = Contact;
var Communication = /** @class */ (function (_super) {
    __extends(Communication, _super);
    function Communication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Communication;
}(base_entity_1.BaseEntity));
exports.Communication = Communication;
var CommunicationType = /** @class */ (function (_super) {
    __extends(CommunicationType, _super);
    function CommunicationType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CommunicationType;
}(lookup_entity_1.Lookup));
exports.CommunicationType = CommunicationType;
//# sourceMappingURL=contact.entity.js.map