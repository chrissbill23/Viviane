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
const mongoose_1 = require("mongoose");
const MongooseSchema_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/MongooseSchema");
let Duck = class Duck {
    getModel() {
        return {};
    }
};
__decorate([
    MongooseSchema_1.VMongooseProperty({ type: String, required: false }),
    __metadata("design:type", String)
], Duck.prototype, "greeting", void 0);
__decorate([
    MongooseSchema_1.VMongooseProperty({ type: Date }),
    __metadata("design:type", Date)
], Duck.prototype, "createdAt", void 0);
__decorate([
    MongooseSchema_1.VMongooseProperty({ type: Date }),
    __metadata("design:type", Date)
], Duck.prototype, "updatedAt", void 0);
Duck = __decorate([
    MongooseSchema_1.VMongooseCollection("Greeter")
], Duck);
const mon = mongoose_1.connect("mongodb://localhost/prova").then((mod) => {
    console.log("great");
    const modl = new Duck().getModel();
    const obj = new modl({ createdAt: new Date(), updatedAt: new Date() });
    obj.save().then((data) => {
        console.log(data);
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});
//# sourceMappingURL=test.js.map