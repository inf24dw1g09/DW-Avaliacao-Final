"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersMediaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CharactersMediaController = class CharactersMediaController {
    constructor(charactersRepository) {
        this.charactersRepository = charactersRepository;
    }
    async get(id, filter) {
        return this.charactersRepository.media(id).get(filter);
    }
    async create(id, media) {
        return this.charactersRepository.media(id).create(media);
    }
    async patch(id, media, where) {
        return this.charactersRepository.media(id).patch(media, where);
    }
    async delete(id, where) {
        return this.charactersRepository.media(id).delete(where);
    }
};
exports.CharactersMediaController = CharactersMediaController;
tslib_1.__decorate([
    (0, rest_1.get)('/characters/{id}/media', {
        responses: {
            '200': {
                description: 'Characters has one Media',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Media),
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
], CharactersMediaController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/characters/{id}/media', {
        responses: {
            '200': {
                description: 'Characters model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Media) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Media, {
                    title: 'NewMediaInCharacters',
                    exclude: ['media_id'],
                    optional: ['character_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CharactersMediaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/characters/{id}/media', {
        responses: {
            '200': {
                description: 'Characters.Media PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Media, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Media))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CharactersMediaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/characters/{id}/media', {
        responses: {
            '200': {
                description: 'Characters.Media DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Media))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CharactersMediaController.prototype, "delete", null);
exports.CharactersMediaController = CharactersMediaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CharactersRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CharactersRepository])
], CharactersMediaController);
//# sourceMappingURL=characters-media.controller.js.map