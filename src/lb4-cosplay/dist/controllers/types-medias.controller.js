"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypesMediasController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TypesMediasController = class TypesMediasController {
    constructor(typesRepository) {
        this.typesRepository = typesRepository;
    }
    async find(id) {
        return this.typesRepository.media_type(id).find();
    }
    async create(id, medias) {
        return this.typesRepository.media_type(id).create(medias);
    }
    async patch(id, medias, where) {
        return this.typesRepository.media_type(id).patch(medias, where);
    }
    async delete(id, where) {
        return this.typesRepository.media_type(id).delete(where);
    }
};
exports.TypesMediasController = TypesMediasController;
tslib_1.__decorate([
    (0, rest_1.get)('/types/{id}/medias', {
        responses: {
            '200': {
                description: 'Array of Types has many Medias',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Medias) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TypesMediasController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/types/{id}/medias', {
        responses: {
            '200': {
                description: 'Types model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Medias) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Medias, {
                    title: 'NewMediasInTypes',
                    exclude: ['media_id'],
                    optional: ['type_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TypesMediasController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/types/{id}/medias', {
        responses: {
            '200': {
                description: 'Types.Medias PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Medias, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Medias))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TypesMediasController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/types/{id}/medias', {
        responses: {
            '200': {
                description: 'Types.Medias DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Medias))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TypesMediasController.prototype, "delete", null);
exports.TypesMediasController = TypesMediasController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TypesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TypesRepository])
], TypesMediasController);
//# sourceMappingURL=types-medias.controller.js.map