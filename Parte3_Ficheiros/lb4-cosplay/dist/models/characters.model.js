"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Characters = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const media_model_1 = require("./media.model");
let Characters = class Characters extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Characters = Characters;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Characters.prototype, "character_id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Characters.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Characters.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => media_model_1.Media, { keyTo: 'character_id' }),
    tslib_1.__metadata("design:type", media_model_1.Media)
], Characters.prototype, "media", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Characters.prototype, "post_id", void 0);
exports.Characters = Characters = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Characters);
//# sourceMappingURL=characters.model.js.map