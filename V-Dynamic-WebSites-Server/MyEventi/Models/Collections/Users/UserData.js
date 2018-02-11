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
const NewsData_1 = require("../News/NewsData");
const EventData_1 = require("../Events/EventData");
const VGoose_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose");
const V_Validators_1 = require("../../../../V-Utils/V-Validators/V-Validators");
let UserData = UserData_1 = class UserData extends VDBMongoDocument_1.VDBMongoDocument {
};
__decorate([
    VGoose_1.VProperty({ type: String, required: true }),
    __metadata("design:type", String)
], UserData.prototype, "name", void 0);
__decorate([
    VGoose_1.VProperty({ type: String, required: true }),
    __metadata("design:type", String)
], UserData.prototype, "surname", void 0);
__decorate([
    VGoose_1.VProperty({ type: String, required: true, unique: true }),
    __metadata("design:type", String)
], UserData.prototype, "nickname", void 0);
__decorate([
    VGoose_1.VProperty({ type: String, required: true }),
    __metadata("design:type", String)
], UserData.prototype, "password", void 0);
__decorate([
    VGoose_1.Validator(V_Validators_1.isEmail, 'Email is not correct'),
    VGoose_1.VProperty({ type: String, required: true }),
    __metadata("design:type", String)
], UserData.prototype, "email", void 0);
__decorate([
    VGoose_1.VProperty({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], UserData.prototype, "isPremium", void 0);
__decorate([
    VGoose_1.VProperty({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], UserData.prototype, "isAdmin", void 0);
__decorate([
    VGoose_1.VProperty({ type: Date }),
    __metadata("design:type", Date)
], UserData.prototype, "lastLogin", void 0);
__decorate([
    VGoose_1.VProperty({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], UserData.prototype, "isBlocked", void 0);
__decorate([
    VGoose_1.VProperty({ type: String, default: '' }),
    __metadata("design:type", String)
], UserData.prototype, "reasonBlocked", void 0);
__decorate([
    VGoose_1.VArrayProperty({ type: "objectId" /* ObjectId */, ref: UserData_1 }),
    __metadata("design:type", Array)
], UserData.prototype, "followers", void 0);
__decorate([
    VGoose_1.VArrayProperty({ type: "objectId" /* ObjectId */, ref: UserData_1 }),
    __metadata("design:type", Array)
], UserData.prototype, "follows", void 0);
__decorate([
    VGoose_1.VArrayProperty({ type: "objectId" /* ObjectId */, ref: NewsData_1.NewsData }),
    __metadata("design:type", Array)
], UserData.prototype, "news", void 0);
__decorate([
    VGoose_1.VArrayProperty({ type: "objectId" /* ObjectId */, ref: EventData_1.EventData }),
    __metadata("design:type", Array)
], UserData.prototype, "createdEvents", void 0);
UserData = UserData_1 = __decorate([
    VGoose_1.VSchema()
], UserData);
exports.UserData = UserData;
var UserData_1;
//# sourceMappingURL=UserData.js.map