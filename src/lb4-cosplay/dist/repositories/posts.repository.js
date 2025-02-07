"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let PostsRepository = class PostsRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, usersRepositoryGetter, charactersRepositoryGetter, commentsRepositoryGetter) {
        super(models_1.Posts, dataSource);
        this.usersRepositoryGetter = usersRepositoryGetter;
        this.charactersRepositoryGetter = charactersRepositoryGetter;
        this.commentsRepositoryGetter = commentsRepositoryGetter;
        this.post_comment = this.createHasManyRepositoryFactoryFor('post_comment', commentsRepositoryGetter);
        this.registerInclusionResolver('post_comment', this.post_comment.inclusionResolver);
        this.post_character = this.createBelongsToAccessorFor('post_character', charactersRepositoryGetter);
        this.registerInclusionResolver('post_character', this.post_character.inclusionResolver);
        this.post_user = this.createBelongsToAccessorFor('post_user', usersRepositoryGetter);
        this.registerInclusionResolver('post_user', this.post_user.inclusionResolver);
    }
};
exports.PostsRepository = PostsRepository;
exports.PostsRepository = PostsRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__param(1, repository_1.repository.getter('UsersRepository')),
    tslib_1.__param(2, repository_1.repository.getter('CharactersRepository')),
    tslib_1.__param(3, repository_1.repository.getter('CommentsRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function, Function, Function])
], PostsRepository);
//# sourceMappingURL=posts.repository.js.map