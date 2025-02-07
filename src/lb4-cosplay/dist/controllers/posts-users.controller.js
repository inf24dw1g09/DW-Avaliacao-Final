"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsUsersController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PostsUsersController = class PostsUsersController {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    async getUsers(id) {
        return this.postsRepository.post_user(id);
    }
};
exports.PostsUsersController = PostsUsersController;
tslib_1.__decorate([
    (0, rest_1.get)('/posts/{id}/users', {
        responses: {
            '200': {
                description: 'Users belonging to Posts',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Users),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsUsersController.prototype, "getUsers", null);
exports.PostsUsersController = PostsUsersController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PostsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PostsRepository])
], PostsUsersController);
//# sourceMappingURL=posts-users.controller.js.map