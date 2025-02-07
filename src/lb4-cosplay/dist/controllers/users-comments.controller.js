"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCommentsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsersCommentsController = class UsersCommentsController {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async find(id) {
        return this.usersRepository.user_comment(id).find();
    }
    async create(id, comments) {
        return this.usersRepository.user_comment(id).create(comments);
    }
    async patch(id, comments, where) {
        return this.usersRepository.user_comment(id).patch(comments, where);
    }
    async delete(id, where) {
        return this.usersRepository.user_comment(id).delete(where);
    }
};
exports.UsersCommentsController = UsersCommentsController;
tslib_1.__decorate([
    (0, rest_1.get)('/users/{id}/comments', {
        responses: {
            '200': {
                description: 'Array of Users has many Comments',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Comments) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCommentsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/users/{id}/comments', {
        responses: {
            '200': {
                description: 'Users model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Comments) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Comments, {
                    title: 'NewCommentsInUsers',
                    exclude: ['comment_id'],
                    optional: ['user_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCommentsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/users/{id}/comments', {
        responses: {
            '200': {
                description: 'Users.Comments PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Comments, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Comments))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCommentsController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/users/{id}/comments', {
        responses: {
            '200': {
                description: 'Users.Comments DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Comments))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCommentsController.prototype, "delete", null);
exports.UsersCommentsController = UsersCommentsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsersRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsersRepository])
], UsersCommentsController);
//# sourceMappingURL=users-comments.controller.js.map