"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let UsersRepository = class UsersRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, postsRepositoryGetter, commentsRepositoryGetter) {
        super(models_1.Users, dataSource);
        this.postsRepositoryGetter = postsRepositoryGetter;
        this.commentsRepositoryGetter = commentsRepositoryGetter;
        this.user_comment = this.createHasManyRepositoryFactoryFor('user_comment', commentsRepositoryGetter);
        this.registerInclusionResolver('user_comment', this.user_comment.inclusionResolver);
        this.user_post = this.createHasManyRepositoryFactoryFor('user_post', postsRepositoryGetter);
        this.registerInclusionResolver('user_post', this.user_post.inclusionResolver);
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__param(1, repository_1.repository.getter('PostsRepository')),
    tslib_1.__param(2, repository_1.repository.getter('CommentsRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function, Function])
], UsersRepository);
//# sourceMappingURL=users.repository.js.map