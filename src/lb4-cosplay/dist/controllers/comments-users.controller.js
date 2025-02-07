"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsUsersController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CommentsUsersController = class CommentsUsersController {
    constructor(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    async getUsers(id) {
        return this.commentsRepository.comment_user(id);
    }
};
exports.CommentsUsersController = CommentsUsersController;
tslib_1.__decorate([
    (0, rest_1.get)('/comments/{id}/users', {
        responses: {
            '200': {
                description: 'Users belonging to Comments',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Users),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsUsersController.prototype, "getUsers", null);
exports.CommentsUsersController = CommentsUsersController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CommentsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CommentsRepository])
], CommentsUsersController);
//# sourceMappingURL=comments-users.controller.js.map