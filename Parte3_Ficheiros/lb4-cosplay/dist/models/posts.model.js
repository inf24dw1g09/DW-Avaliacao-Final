"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const users_model_1 = require("./users.model");
const characters_model_1 = require("./characters.model");
const comments_model_1 = require("./comments.model");
let Posts = class Posts extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Posts = Posts;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Posts.prototype, "post_id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Posts.prototype, "title", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Posts.prototype, "date", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Posts.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => users_model_1.Users, { keyTo: 'post_id_cosplayers' }),
    tslib_1.__metadata("design:type", Array)
], Posts.prototype, "cosplayers", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => users_model_1.Users, { keyTo: 'post_id_photographers' }),
    tslib_1.__metadata("design:type", users_model_1.Users)
], Posts.prototype, "photographer", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => characters_model_1.Characters, { keyTo: 'post_id' }),
    tslib_1.__metadata("design:type", Array)
], Posts.prototype, "characters", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => comments_model_1.Comments, { keyTo: 'post_id' }),
    tslib_1.__metadata("design:type", Array)
], Posts.prototype, "comments", void 0);
exports.Posts = Posts = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Posts);
//# sourceMappingURL=posts.model.js.map