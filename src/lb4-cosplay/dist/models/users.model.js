"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const posts_model_1 = require("./posts.model");
const comments_model_1 = require("./comments.model");
let Users = class Users extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Users = Users;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Users.prototype, "user_id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "nickname", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "password", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => posts_model_1.Posts, { keyTo: 'user_id' }),
    tslib_1.__metadata("design:type", Array)
], Users.prototype, "user_post", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => comments_model_1.Comments, { keyTo: 'user_id' }),
    tslib_1.__metadata("design:type", Array)
], Users.prototype, "user_comment", void 0);
exports.Users = Users = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Users);
//# sourceMappingURL=users.model.js.map