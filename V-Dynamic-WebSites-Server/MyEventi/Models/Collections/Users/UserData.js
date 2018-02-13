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
const NewsData_1 = require("../News/NewsData");
const EventData_1 = require("../Events/EventData");
const crypto = require("crypto");
const VGoose_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose");
const V_Validators_1 = require("../../../../V-Utils/V-Validators/V-Validators");
let UserData = UserData_1 = class UserData extends VDBMongoDocument_1.VDBMongoDocument {
    static generateSalt() {
        return crypto.randomBytes(UserData_1.SALT_LENGTH).toString('base64');
    }
    static hashPassword(password, passwordSalt, passwordIteration, passwordLength) {
        return crypto
            .pbkdf2Sync(password, passwordSalt, passwordIteration, passwordLength, 'sha512')
            .toString('base64');
    }
    isAuthenticated(password) {
        return UserData_1.hashPassword(password, this.passwordSalt, this.passwordIteration, UserData_1.PASSWORD_LENGTH) === this.password;
    }
    getData() {
        return {
            name: this.name,
            surname: this.surname,
            nickname: this.nickname,
        };
    }
};
UserData.SALT_LENGTH = 64;
UserData.PASSWORD_LENGTH = 64;
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
    VGoose_1.VIndexedProp(1),
    __metadata("design:type", String)
], UserData.prototype, "nickname", void 0);
__decorate([
    VGoose_1.VProperty({ type: String, required: true }),
    __metadata("design:type", String)
], UserData.prototype, "password", void 0);
__decorate([
    VGoose_1.VProperty({ type: String, required: true, default: UserData_1.generateSalt() }),
    __metadata("design:type", String)
], UserData.prototype, "passwordSalt", void 0);
__decorate([
    VGoose_1.VProperty({ type: Number, required: true, default: 8 }),
    __metadata("design:type", Number)
], UserData.prototype, "passwordIteration", void 0);
__decorate([
    VGoose_1.Validator(V_Validators_1.isEmail, 'Email is not correct'),
    VGoose_1.VProperty({ type: String, required: true }),
    VGoose_1.VIndexedProp(1),
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
__decorate([
    VGoose_1.VMethodProperty,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserData.prototype, "isAuthenticated", null);
__decorate([
    VGoose_1.VMethodProperty,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UserData.prototype, "getData", null);
UserData = UserData_1 = __decorate([
    VGoose_1.VSchema(),
    VGoose_1.VBeforeSave(true, function (next, done) {
        next();
        if (this.password != undefined) {
            this.password = UserData_1.hashPassword(this.password, this.passwordSalt, this.passwordIteration, UserData_1.PASSWORD_LENGTH);
        }
        done();
    })
], UserData);
exports.UserData = UserData;
var UserData_1;
//# sourceMappingURL=UserData.js.map