"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsCommentsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PostsCommentsController = class PostsCommentsController {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    async find(id, filter) {
        return this.postsRepository.comments(id).find(filter);
    }
    async create(id, comments) {
        return this.postsRepository.comments(id).create(comments);
    }
    async patch(id, comments, where) {
        return this.postsRepository.comments(id).patch(comments, where);
    }
    async delete(id, where) {
        return this.postsRepository.comments(id).delete(where);
    }
};
exports.PostsCommentsController = PostsCommentsController;
tslib_1.__decorate([
    (0, rest_1.get)('/posts/{id}/comments', {
        responses: {
            '200': {
                description: 'Array of Posts has many Comments',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Comments) },
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
], PostsCommentsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/posts/{id}/comments', {
        responses: {
            '200': {
                description: 'Posts model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Comments) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Comments, {
                    title: 'NewCommentsInPosts',
                    exclude: ['comment_id'],
                    optional: ['post_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsCommentsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/posts/{id}/comments', {
        responses: {
            '200': {
                description: 'Posts.Comments PATCH success count',
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
], PostsCommentsController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/posts/{id}/comments', {
        responses: {
            '200': {
                description: 'Posts.Comments DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Comments))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsCommentsController.prototype, "delete", null);
exports.PostsCommentsController = PostsCommentsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PostsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PostsRepository])
], PostsCommentsController);
//# sourceMappingURL=posts-comments.controller.js.map