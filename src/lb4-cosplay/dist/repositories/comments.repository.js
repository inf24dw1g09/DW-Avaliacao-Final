"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let CommentsRepository = class CommentsRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, postsRepositoryGetter, usersRepositoryGetter) {
        super(models_1.Comments, dataSource);
        this.postsRepositoryGetter = postsRepositoryGetter;
        this.usersRepositoryGetter = usersRepositoryGetter;
        this.comment_user = this.createBelongsToAccessorFor('comment_user', usersRepositoryGetter);
        this.registerInclusionResolver('comment_user', this.comment_user.inclusionResolver);
        this.comment_post = this.createBelongsToAccessorFor('comment_post', postsRepositoryGetter);
        this.registerInclusionResolver('comment_post', this.comment_post.inclusionResolver);
    }
};
exports.CommentsRepository = CommentsRepository;
exports.CommentsRepository = CommentsRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__param(1, repository_1.repository.getter('PostsRepository')),
    tslib_1.__param(2, repository_1.repository.getter('UsersRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function, Function])
], CommentsRepository);
//# sourceMappingURL=comments.repository.js.map