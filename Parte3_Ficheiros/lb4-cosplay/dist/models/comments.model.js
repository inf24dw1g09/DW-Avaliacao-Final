"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Comments = class Comments extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Comments = Comments;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Comments.prototype, "comment_id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Comments.prototype, "post_id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Comments.prototype, "user_name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Comments.prototype, "message", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Comments.prototype, "date", void 0);
exports.Comments = Comments = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Comments);
//# sourceMappingURL=comments.model.js.map