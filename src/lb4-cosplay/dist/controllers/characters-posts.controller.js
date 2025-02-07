"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersPostsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CharactersPostsController = class CharactersPostsController {
    constructor(charactersRepository) {
        this.charactersRepository = charactersRepository;
    }
    async find(id) {
        return this.charactersRepository.character_post(id).find();
    }
    async create(id, posts) {
        return this.charactersRepository.character_post(id).create(posts);
    }
    async patch(id, posts, where) {
        return this.charactersRepository.character_post(id).patch(posts, where);
    }
    async delete(id, where) {
        return this.charactersRepository.character_post(id).delete(where);
    }
};
exports.CharactersPostsController = CharactersPostsController;
tslib_1.__decorate([
    (0, rest_1.get)('/characters/{id}/posts', {
        responses: {
            '200': {
                description: 'Array of Characters has many Posts',
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
], CharactersPostsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/characters/{id}/posts', {
        responses: {
            '200': {
                description: 'Characters model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Posts) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Posts, {
                    title: 'NewPostsInCharacters',
                    exclude: ['post_id'],
                    optional: ['character_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CharactersPostsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/characters/{id}/posts', {
        responses: {
            '200': {
                description: 'Characters.Posts PATCH success count',
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
], CharactersPostsController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/characters/{id}/posts', {
        responses: {
            '200': {
                description: 'Characters.Posts DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Posts))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CharactersPostsController.prototype, "delete", null);
exports.CharactersPostsController = CharactersPostsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CharactersRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CharactersRepository])
], CharactersPostsController);
//# sourceMappingURL=characters-posts.controller.js.map