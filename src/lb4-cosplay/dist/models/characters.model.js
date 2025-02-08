"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Characters = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const medias_model_1 = require("./medias.model");
const posts_model_1 = require("./posts.model");
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
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Characters.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => medias_model_1.Medias, { name: 'media_character' }),
    tslib_1.__metadata("design:type", Number)
], Characters.prototype, "media_id", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => posts_model_1.Posts, { keyTo: 'character_id' }),
    tslib_1.__metadata("design:type", Array)
], Characters.prototype, "character_post", void 0);
exports.Characters = Characters = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Characters);
//# sourceMappingURL=characters.model.js.map