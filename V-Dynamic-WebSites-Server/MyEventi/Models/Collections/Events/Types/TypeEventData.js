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
let TypeEventData = class TypeEventData extends VDBMongoDocument_1.VDBMongoDocument {
    getData() {
        return {
            name: this.name,
        };
    }
};
__decorate([
    VGoose_1.VProperty({ type: String, uppercase: true, unique: true }),
    VGoose_1.VIndexedProp(1),
    __metadata("design:type", String)
], TypeEventData.prototype, "name", void 0);
__decorate([
    VGoose_1.VArrayProperty({ type: "string" /* String */ }),
    __metadata("design:type", Array)
], TypeEventData.prototype, "photos", void 0);
__decorate([
    VGoose_1.VMethodProperty,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], TypeEventData.prototype, "getData", null);
TypeEventData = __decorate([
    VGoose_1.VSchema()
], TypeEventData);
exports.TypeEventData = TypeEventData;
//# sourceMappingURL=TypeEventData.js.map