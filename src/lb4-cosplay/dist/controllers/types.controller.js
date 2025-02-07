"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TypesController = class TypesController {
    constructor(typesRepository) {
        this.typesRepository = typesRepository;
    }
    async create(types) {
        return this.typesRepository.create(types);
    }
    async count(where) {
        return this.typesRepository.count(where);
    }
    async find(
    // @param.filter(Types) filter?: Filter<Types>,
    ) {
        return this.typesRepository.find();
    }
    async updateAll(types, where) {
        return this.typesRepository.updateAll(types, where);
    }
    async findById(id) {
        return this.typesRepository.findById(id);
    }
    async updateById(id, types) {
        await this.typesRepository.updateById(id, types);
    }
    async replaceById(id, types) {
        await this.typesRepository.replaceById(id, types);
    }
    async deleteById(id) {
        await this.typesRepository.deleteById(id);
    }
};
exports.TypesController = TypesController;
tslib_1.__decorate([
    (0, rest_1.post)('/types'),
    (0, rest_1.response)(200, {
        description: 'Types model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Types) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Types, {
                    title: 'NewTypes',
                    exclude: ['type_id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TypesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/types/count'),
    (0, rest_1.response)(200, {
        description: 'Types model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Types)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TypesController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/types'),
    (0, rest_1.response)(200, {
        description: 'Array of Types model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Types, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], TypesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/types'),
    (0, rest_1.response)(200, {
        description: 'Types PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Types, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Types)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Types, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TypesController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/types/{id}'),
    (0, rest_1.response)(200, {
        description: 'Types model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Types, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TypesController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/types/{id}'),
    (0, rest_1.response)(204, {
        description: 'Types PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Types, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Types]),
    tslib_1.__metadata("design:returntype", Promise)
], TypesController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/types/{id}'),
    (0, rest_1.response)(204, {
        description: 'Types PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Types]),
    tslib_1.__metadata("design:returntype", Promise)
], TypesController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/types/{id}'),
    (0, rest_1.response)(204, {
        description: 'Types DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TypesController.prototype, "deleteById", null);
exports.TypesController = TypesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TypesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TypesRepository])
], TypesController);
//# sourceMappingURL=types.controller.js.map