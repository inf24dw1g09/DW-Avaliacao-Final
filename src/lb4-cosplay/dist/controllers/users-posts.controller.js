"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersPostsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsersPostsController = class UsersPostsController {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async find(id) {
        return this.usersRepository.user_post(id).find();
    }
    async create(id, posts) {
        return this.usersRepository.user_post(id).create(posts);
    }
    async patch(id, posts, where) {
        return this.usersRepository.user_post(id).patch(posts, where);
    }
    async delete(id, where) {
        return this.usersRepository.user_post(id).delete(where);
    }
};
exports.UsersPostsController = UsersPostsController;
tslib_1.__decorate([
    (0, rest_1.get)('/users/{id}/posts', {
        responses: {
            '200': {
                description: 'Array of Users has many Posts',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Posts) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersPostsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/users/{id}/posts', {
        responses: {
            '200': {
                description: 'Users model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Posts) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Posts, {
                    title: 'NewPostsInUsers',
                    exclude: ['post_id'],
                    optional: ['user_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersPostsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/users/{id}/posts', {
        responses: {
            '200': {
                description: 'Users.Posts PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Posts, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Posts))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersPostsController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/users/{id}/posts', {
        responses: {
            '200': {
                description: 'Users.Posts DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Posts))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersPostsController.prototype, "delete", null);
exports.UsersPostsController = UsersPostsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsersRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsersRepository])
], UsersPostsController);
//# sourceMappingURL=users-posts.controller.js.map