"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MediaController = class MediaController {
    constructor(mediaRepository) {
        this.mediaRepository = mediaRepository;
    }
    async create(media) {
        return this.mediaRepository.create(media);
    }
    async count(where) {
        return this.mediaRepository.count(where);
    }
    async find(filter) {
        return this.mediaRepository.find(filter);
    }
    async updateAll(media, where) {
        return this.mediaRepository.updateAll(media, where);
    }
    async findById(id, filter) {
        return this.mediaRepository.findById(id, filter);
    }
    async updateById(id, media) {
        await this.mediaRepository.updateById(id, media);
    }
    async replaceById(id, media) {
        await this.mediaRepository.replaceById(id, media);
    }
    async deleteById(id) {
        await this.mediaRepository.deleteById(id);
    }
};
exports.MediaController = MediaController;
tslib_1.__decorate([
    (0, rest_1.post)('/media'),
    (0, rest_1.response)(200, {
        description: 'Media model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Media) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Media, {
                    title: 'NewMedia',
                    exclude: ['media_id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/media/count'),
    (0, rest_1.response)(200, {
        description: 'Media model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Media)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/media'),
    (0, rest_1.response)(200, {
        description: 'Array of Media model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Media, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Media)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/media'),
    (0, rest_1.response)(200, {
        description: 'Media PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Media, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Media)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Media, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/media/{id}'),
    (0, rest_1.response)(200, {
        description: 'Media model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Media, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Media, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/media/{id}'),
    (0, rest_1.response)(204, {
        description: 'Media PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Media, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Media]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/media/{id}'),
    (0, rest_1.response)(204, {
        description: 'Media PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Media]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/media/{id}'),
    (0, rest_1.response)(204, {
        description: 'Media DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "deleteById", null);
exports.MediaController = MediaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MediaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MediaRepository])
], MediaController);
//# sourceMappingURL=media.controller.js.map