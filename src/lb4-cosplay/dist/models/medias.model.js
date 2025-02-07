"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medias = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const types_model_1 = require("./types.model");
const characters_model_1 = require("./characters.model");
let Medias = class Medias extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Medias = Medias;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Medias.prototype, "media_id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Medias.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => types_model_1.Types, { name: 'type_media' }),
    tslib_1.__metadata("design:type", Number)
], Medias.prototype, "type_id", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => characters_model_1.Characters, { keyTo: 'media_id' }),
    tslib_1.__metadata("design:type", Array)
], Medias.prototype, "character_media", void 0);
exports.Medias = Medias = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Medias);
//# sourceMappingURL=medias.model.js.map