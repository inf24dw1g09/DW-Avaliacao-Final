"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const type_model_1 = require("./type.model");
let Media = class Media extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Media = Media;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Media.prototype, "media_id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Media.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Media.prototype, "type", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => type_model_1.Type, { keyTo: 'media_id' }),
    tslib_1.__metadata("design:type", Array)
], Media.prototype, "types", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Media.prototype, "character_id", void 0);
exports.Media = Media = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Media);
//# sourceMappingURL=media.model.js.map