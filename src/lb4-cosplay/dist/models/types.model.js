"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Types = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const medias_model_1 = require("./medias.model");
let Types = class Types extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Types = Types;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Types.prototype, "type_id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Types.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => medias_model_1.Medias, { keyTo: 'type_id' }),
    tslib_1.__metadata("design:type", Array)
], Types.prototype, "media_type", void 0);
exports.Types = Types = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Types);
//# sourceMappingURL=types.model.js.map