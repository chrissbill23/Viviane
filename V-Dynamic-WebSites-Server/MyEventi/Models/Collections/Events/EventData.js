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
const VDBMongoDocument_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument");
const VGoose_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose");
const TypeEventData_1 = require("./Types/TypeEventData");
const CategEventData_1 = require("./Categ/CategEventData");
const EventReportsData_1 = require("./EventReportsData");
let EventData = class EventData extends VDBMongoDocument_1.VDBMongoDocument {
    getData() {
        return this;
    }
};
__decorate([
    VGoose_1.VProperty({ type: Date }),
    __metadata("design:type", Date)
], EventData.prototype, "dateAndTimeEv", void 0);
__decorate([
    VGoose_1.VProperty({ type: String }),
    __metadata("design:type", String)
], EventData.prototype, "createdBy", void 0);
__decorate([
    VGoose_1.VProperty({ type: String }),
    __metadata("design:type", String)
], EventData.prototype, "title", void 0);
__decorate([
    VGoose_1.VProperty({ type: String }),
    __metadata("design:type", String)
], EventData.prototype, "introduction", void 0);
__decorate([
    VGoose_1.VProperty({ type: String }),
    __metadata("design:type", String)
], EventData.prototype, "fullDescription", void 0);
__decorate([
    VGoose_1.VRefProperty({ ref: TypeEventData_1.TypeEventData }),
    __metadata("design:type", String)
], EventData.prototype, "type", void 0);
__decorate([
    VGoose_1.VRefProperty({ ref: CategEventData_1.CategEventData }),
    __metadata("design:type", String)
], EventData.prototype, "category", void 0);
__decorate([
    VGoose_1.VProperty({ type: String, uppercase: true }),
    __metadata("design:type", String)
], EventData.prototype, "city", void 0);
__decorate([
    VGoose_1.VArrayProperty({ type: "string" /* String */ }),
    __metadata("design:type", Array)
], EventData.prototype, "tags", void 0);
__decorate([
    VGoose_1.VProperty({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], EventData.prototype, "block", void 0);
__decorate([
    VGoose_1.VProperty({ type: String, default: '' }),
    __metadata("design:type", String)
], EventData.prototype, "reasonBlock", void 0);
__decorate([
    VGoose_1.VArrayProperty({ type: "string" /* String */ }),
    __metadata("design:type", Array)
], EventData.prototype, "fotos", void 0);
__decorate([
    VGoose_1.VArrayProperty({ type: "string" /* String */ }),
    __metadata("design:type", Array)
], EventData.prototype, "partecipants", void 0);
__decorate([
    VGoose_1.VProperty({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], EventData.prototype, "foreground", void 0);
__decorate([
    VGoose_1.VArrayProperty({ type: "objectId" /* ObjectId */, ref: EventReportsData_1.EventReportsData }),
    __metadata("design:type", Array)
], EventData.prototype, "reports", void 0);
__decorate([
    VGoose_1.VMethodProperty,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], EventData.prototype, "getData", null);
EventData = __decorate([
    VGoose_1.VSchema(),
    VGoose_1.VBeforeSave(true, function (next, done) {
        next();
        this.tags = this.tags.map((x) => {
            return x.toUpperCase;
        });
        done();
    })
], EventData);
exports.EventData = EventData;
//# sourceMappingURL=EventData.js.map