"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsPostsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CommentsPostsController = class CommentsPostsController {
    constructor(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    async getPosts(id) {
        return this.commentsRepository.comment_post(id);
    }
};
exports.CommentsPostsController = CommentsPostsController;
tslib_1.__decorate([
    (0, rest_1.get)('/comments/{id}/posts', {
        responses: {
            '200': {
                description: 'Posts belonging to Comments',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Posts),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsPostsController.prototype, "getPosts", null);
exports.CommentsPostsController = CommentsPostsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CommentsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CommentsRepository])
], CommentsPostsController);
//# sourceMappingURL=comments-posts.controller.js.map