"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsCharactersController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PostsCharactersController = class PostsCharactersController {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    async find(id, filter) {
        return this.postsRepository.characters(id).find(filter);
    }
    async create(id, characters) {
        return this.postsRepository.characters(id).create(characters);
    }
    async patch(id, characters, where) {
        return this.postsRepository.characters(id).patch(characters, where);
    }
    async delete(id, where) {
        return this.postsRepository.characters(id).delete(where);
    }
};
exports.PostsCharactersController = PostsCharactersController;
tslib_1.__decorate([
    (0, rest_1.get)('/posts/{id}/characters', {
        responses: {
            '200': {
                description: 'Array of Posts has many Characters',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Characters) },
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
], PostsCharactersController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/posts/{id}/characters', {
        responses: {
            '200': {
                description: 'Posts model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Characters) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Characters, {
                    title: 'NewCharactersInPosts',
                    exclude: ['character_id'],
                    optional: ['post_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsCharactersController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/posts/{id}/characters', {
        responses: {
            '200': {
                description: 'Posts.Characters PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Characters, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Characters))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsCharactersController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/posts/{id}/characters', {
        responses: {
            '200': {
                description: 'Posts.Characters DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Characters))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsCharactersController.prototype, "delete", null);
exports.PostsCharactersController = PostsCharactersController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PostsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PostsRepository])
], PostsCharactersController);
//# sourceMappingURL=posts-characters.controller.js.map