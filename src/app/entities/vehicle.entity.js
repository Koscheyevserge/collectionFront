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
var Vehicle = /** @class */ (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Vehicle;
}(base_entity_1.BaseEntity));
exports.Vehicle = Vehicle;
var VehicleRisk = /** @class */ (function (_super) {
    __extends(VehicleRisk, _super);
    function VehicleRisk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VehicleRisk;
}(lookup_entity_1.Lookup));
exports.VehicleRisk = VehicleRisk;
//# sourceMappingURL=vehicle.entity.js.map