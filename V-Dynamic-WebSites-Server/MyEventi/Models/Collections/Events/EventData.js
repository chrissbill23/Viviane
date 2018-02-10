"use strict";
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
const VDBMongoDocument_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument");
const VGoose_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose");
let EventData = class EventData extends VDBMongoDocument_1.VDBMongoDocument {
    getData() {
        return this.dateAndTimeEv;
    }
};
__decorate([
    VGoose_1.VProperty({ type: Date }),
    __metadata("design:type", Date)
], EventData.prototype, "dateAndTimeEv", void 0);
EventData = __decorate([
    VGoose_1.VSchema()
], EventData);
exports.EventData = EventData;
//# sourceMappingURL=EventData.js.map