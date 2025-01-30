"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CommentsController = class CommentsController {
    constructor(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    async create(comments) {
        return this.commentsRepository.create(comments);
    }
    async count(where) {
        return this.commentsRepository.count(where);
    }
    async find(filter) {
        return this.commentsRepository.find(filter);
    }
    async updateAll(comments, where) {
        return this.commentsRepository.updateAll(comments, where);
    }
    async findById(id, filter) {
        return this.commentsRepository.findById(id, filter);
    }
    async updateById(id, comments) {
        await this.commentsRepository.updateById(id, comments);
    }
    async replaceById(id, comments) {
        await this.commentsRepository.replaceById(id, comments);
    }
    async deleteById(id) {
        await this.commentsRepository.deleteById(id);
    }
};
exports.CommentsController = CommentsController;
tslib_1.__decorate([
    (0, rest_1.post)('/comments'),
    (0, rest_1.response)(200, {
        description: 'Comments model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Comments) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Comments, {
                    title: 'NewComments',
                    exclude: ['comment_id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/comments/count'),
    (0, rest_1.response)(200, {
        description: 'Comments model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Comments)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/comments'),
    (0, rest_1.response)(200, {
        description: 'Array of Comments model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Comments, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Comments)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/comments'),
    (0, rest_1.response)(200, {
        description: 'Comments PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Comments, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Comments)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Comments, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/comments/{id}'),
    (0, rest_1.response)(200, {
        description: 'Comments model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Comments, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Comments, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/comments/{id}'),
    (0, rest_1.response)(204, {
        description: 'Comments PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Comments, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Comments]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/comments/{id}'),
    (0, rest_1.response)(204, {
        description: 'Comments PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Comments]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/comments/{id}'),
    (0, rest_1.response)(204, {
        description: 'Comments DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "deleteById", null);
exports.CommentsController = CommentsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CommentsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CommentsRepository])
], CommentsController);
//# sourceMappingURL=comments.controller.js.map