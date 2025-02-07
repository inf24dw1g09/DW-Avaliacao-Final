"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediasController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MediasController = class MediasController {
    constructor(mediasRepository) {
        this.mediasRepository = mediasRepository;
    }
    async create(medias) {
        return this.mediasRepository.create(medias);
    }
    async count(where) {
        return this.mediasRepository.count(where);
    }
    async find(
    //@param.filter(Medias) filter?: Filter<Medias>,
    ) {
        return this.mediasRepository.find();
    }
    async updateAll(medias, where) {
        return this.mediasRepository.updateAll(medias, where);
    }
    async findById(id) {
        return this.mediasRepository.findById(id);
    }
    async updateById(id, medias) {
        await this.mediasRepository.updateById(id, medias);
    }
    async replaceById(id, medias) {
        await this.mediasRepository.replaceById(id, medias);
    }
    async deleteById(id) {
        await this.mediasRepository.deleteById(id);
    }
};
exports.MediasController = MediasController;
tslib_1.__decorate([
    (0, rest_1.post)('/medias'),
    (0, rest_1.response)(200, {
        description: 'Medias model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Medias) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Medias, {
                    title: 'NewMedias',
                    exclude: ['media_id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediasController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/medias/count'),
    (0, rest_1.response)(200, {
        description: 'Medias model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Medias)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediasController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/medias'),
    (0, rest_1.response)(200, {
        description: 'Array of Medias model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Medias, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], MediasController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/medias'),
    (0, rest_1.response)(200, {
        description: 'Medias PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Medias, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Medias)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Medias, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediasController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/medias/{id}'),
    (0, rest_1.response)(200, {
        description: 'Medias model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Medias, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], MediasController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/medias/{id}'),
    (0, rest_1.response)(204, {
        description: 'Medias PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Medias, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Medias]),
    tslib_1.__metadata("design:returntype", Promise)
], MediasController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/medias/{id}'),
    (0, rest_1.response)(204, {
        description: 'Medias PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Medias]),
    tslib_1.__metadata("design:returntype", Promise)
], MediasController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/medias/{id}'),
    (0, rest_1.response)(204, {
        description: 'Medias DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], MediasController.prototype, "deleteById", null);
exports.MediasController = MediasController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MediasRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MediasRepository])
], MediasController);
//# sourceMappingURL=medias.controller.js.map