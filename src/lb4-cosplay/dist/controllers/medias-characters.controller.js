"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediasCharactersController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MediasCharactersController = class MediasCharactersController {
    constructor(mediasRepository) {
        this.mediasRepository = mediasRepository;
    }
    async find(id) {
        return this.mediasRepository.character_media(id).find();
    }
    async create(id, characters) {
        return this.mediasRepository.character_media(id).create(characters);
    }
    async patch(id, characters, where) {
        return this.mediasRepository.character_media(id).patch(characters, where);
    }
    async delete(id, where) {
        return this.mediasRepository.character_media(id).delete(where);
    }
};
exports.MediasCharactersController = MediasCharactersController;
tslib_1.__decorate([
    (0, rest_1.get)('/medias/{id}/characters', {
        responses: {
            '200': {
                description: 'Array of Medias has many Characters',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Characters) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], MediasCharactersController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/medias/{id}/characters', {
        responses: {
            '200': {
                description: 'Medias model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Characters) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Characters, {
                    title: 'NewCharactersInMedias',
                    exclude: ['character_id'],
                    optional: ['media_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediasCharactersController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/medias/{id}/characters', {
        responses: {
            '200': {
                description: 'Medias.Characters PATCH success count',
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
], MediasCharactersController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/medias/{id}/characters', {
        responses: {
            '200': {
                description: 'Medias.Characters DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Characters))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediasCharactersController.prototype, "delete", null);
exports.MediasCharactersController = MediasCharactersController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MediasRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MediasRepository])
], MediasCharactersController);
//# sourceMappingURL=medias-characters.controller.js.map