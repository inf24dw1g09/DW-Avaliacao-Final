"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsUsersController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PostsUsersController = class PostsUsersController {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    async find(id, filter) {
        return this.postsRepository.cosplayers(id).find(filter);
    }
    async create(id, users) {
        return this.postsRepository.cosplayers(id).create(users);
    }
    async patch(id, users, where) {
        return this.postsRepository.cosplayers(id).patch(users, where);
    }
    async delete(id, where) {
        return this.postsRepository.cosplayers(id).delete(where);
    }
};
exports.PostsUsersController = PostsUsersController;
tslib_1.__decorate([
    (0, rest_1.get)('/posts/{id}/users', {
        responses: {
            '200': {
                description: 'Array of Posts has many Users',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Users) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsUsersController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/posts/{id}/users', {
        responses: {
            '200': {
                description: 'Posts model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Users) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Users, {
                    title: 'NewUsersInPosts',
                    exclude: ['user_name'],
                    optional: ['post_id_cosplayers']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsUsersController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/posts/{id}/users', {
        responses: {
            '200': {
                description: 'Posts.Users PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Users, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Users))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsUsersController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/posts/{id}/users', {
        responses: {
            '200': {
                description: 'Posts.Users DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Users))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsUsersController.prototype, "delete", null);
exports.PostsUsersController = PostsUsersController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PostsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PostsRepository])
], PostsUsersController);
//# sourceMappingURL=posts-users.controller.js.map