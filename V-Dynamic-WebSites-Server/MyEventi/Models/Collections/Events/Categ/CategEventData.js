"use strict";
/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const VGoose_1 = require("../../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose");
const VDBMongoDocument_1 = require("../../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument");
let CategEventData = class CategEventData extends VDBMongoDocument_1.VDBMongoDocument {
};
__decorate([
    VGoose_1.VProperty({ type: String, uppercase: true }),
    __metadata("design:type", String)
], CategEventData.prototype, "name", void 0);
CategEventData = __decorate([
    VGoose_1.VSchema()
], CategEventData);
exports.CategEventData = CategEventData;
//# sourceMappingURL=CategEventData.js.map