"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Type = class Type extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Type = Type;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Type.prototype, "type_id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Type.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Type.prototype, "media_id", void 0);
exports.Type = Type = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Type);
//# sourceMappingURL=type.model.js.map