"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsersController = class UsersController {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(users) {
        return this.usersRepository.create(users);
    }
    async count(where) {
        return this.usersRepository.count(where);
    }
    // PROBLEM HERE // filter?
    async find(
    // @param.filter(Users) filter?: Filter<Users>,
    ) {
        return this.usersRepository.find();
    }
    async updateAll(users, where) {
        return this.usersRepository.updateAll(users, where);
    }
    async findById(id, filter) {
        return this.usersRepository.findById(id);
    }
    async updateById(id, users) {
        await this.usersRepository.updateById(id, users);
    }
    async replaceById(id, users) {
        await this.usersRepository.replaceById(id, users);
    }
    async deleteById(id) {
        await this.usersRepository.deleteById(id);
    }
};
exports.UsersController = UsersController;
tslib_1.__decorate([
    (0, rest_1.post)('/users'),
    (0, rest_1.response)(200, {
        description: 'Users model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Users) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Users, {
                    title: 'NewUsers',
                    exclude: ['user_id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/users/count'),
    (0, rest_1.response)(200, {
        description: 'Users model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Users)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/users'),
    (0, rest_1.response)(200, {
        description: 'Array of Users model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Users, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/users'),
    (0, rest_1.response)(200, {
        description: 'Users PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Users, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Users)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Users, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/users/{id}'),
    (0, rest_1.response)(200, {
        description: 'Users model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Users, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Users, { exclude: ['where', 'order'] })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/users/{id}'),
    (0, rest_1.response)(204, {
        description: 'Users PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Users, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Users]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/users/{id}'),
    (0, rest_1.response)(204, {
        description: 'Users PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Users]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/users/{id}'),
    (0, rest_1.response)(204, {
        description: 'Users DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "deleteById", null);
exports.UsersController = UsersController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsersRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsersRepository])
], UsersController);
//# sourceMappingURL=users.controller.js.map