"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaTypeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MediaTypeController = class MediaTypeController {
    constructor(mediaRepository) {
        this.mediaRepository = mediaRepository;
    }
    async find(id, filter) {
        return this.mediaRepository.types(id).find(filter);
    }
    async create(id, type) {
        return this.mediaRepository.types(id).create(type);
    }
    async patch(id, type, where) {
        return this.mediaRepository.types(id).patch(type, where);
    }
    async delete(id, where) {
        return this.mediaRepository.types(id).delete(where);
    }
};
exports.MediaTypeController = MediaTypeController;
tslib_1.__decorate([
    (0, rest_1.get)('/media/{id}/types', {
        responses: {
            '200': {
                description: 'Array of Media has many Type',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Type) },
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
], MediaTypeController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/media/{id}/types', {
        responses: {
            '200': {
                description: 'Media model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Type) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Type, {
                    title: 'NewTypeInMedia',
                    exclude: ['type_id'],
                    optional: ['media_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaTypeController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/media/{id}/types', {
        responses: {
            '200': {
                description: 'Media.Type PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Type, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Type))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaTypeController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/media/{id}/types', {
        responses: {
            '200': {
                description: 'Media.Type DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Type))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaTypeController.prototype, "delete", null);
exports.MediaTypeController = MediaTypeController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MediaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MediaRepository])
], MediaTypeController);
//# sourceMappingURL=media-type.controller.js.map