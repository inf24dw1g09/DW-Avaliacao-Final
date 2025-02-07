"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CharactersController = class CharactersController {
    constructor(charactersRepository) {
        this.charactersRepository = charactersRepository;
    }
    async create(characters) {
        return this.charactersRepository.create(characters);
    }
    async count(where) {
        return this.charactersRepository.count(where);
    }
    async find(
    // @param.filter(Characters) filter?: Filter<Characters>,
    ) {
        return this.charactersRepository.find();
    }
    async updateAll(characters, where) {
        return this.charactersRepository.updateAll(characters, where);
    }
    async findById(id) {
        return this.charactersRepository.findById(id);
    }
    async updateById(id, characters) {
        await this.charactersRepository.updateById(id, characters);
    }
    async replaceById(id, characters) {
        await this.charactersRepository.replaceById(id, characters);
    }
    async deleteById(id) {
        await this.charactersRepository.deleteById(id);
    }
};
exports.CharactersController = CharactersController;
tslib_1.__decorate([
    (0, rest_1.post)('/characters'),
    (0, rest_1.response)(200, {
        description: 'Characters model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Characters) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Characters, {
                    title: 'NewCharacters',
                    exclude: ['character_id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CharactersController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/characters/count'),
    (0, rest_1.response)(200, {
        description: 'Characters model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Characters)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CharactersController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/characters'),
    (0, rest_1.response)(200, {
        description: 'Array of Characters model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Characters, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CharactersController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/characters'),
    (0, rest_1.response)(200, {
        description: 'Characters PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Characters, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Characters)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Characters, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CharactersController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/characters/{id}'),
    (0, rest_1.response)(200, {
        description: 'Characters model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Characters, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CharactersController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/characters/{id}'),
    (0, rest_1.response)(204, {
        description: 'Characters PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Characters, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Characters]),
    tslib_1.__metadata("design:returntype", Promise)
], CharactersController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/characters/{id}'),
    (0, rest_1.response)(204, {
        description: 'Characters PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Characters]),
    tslib_1.__metadata("design:returntype", Promise)
], CharactersController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/characters/{id}'),
    (0, rest_1.response)(204, {
        description: 'Characters DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CharactersController.prototype, "deleteById", null);
exports.CharactersController = CharactersController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CharactersRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CharactersRepository])
], CharactersController);
//# sourceMappingURL=characters.controller.js.map