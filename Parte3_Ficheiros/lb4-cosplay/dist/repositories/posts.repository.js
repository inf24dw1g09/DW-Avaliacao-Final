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
        this.comments = this.createHasManyRepositoryFactoryFor('comments', commentsRepositoryGetter);
        this.registerInclusionResolver('comments', this.comments.inclusionResolver);
        this.characters = this.createHasManyRepositoryFactoryFor('characters', charactersRepositoryGetter);
        this.registerInclusionResolver('characters', this.characters.inclusionResolver);
        this.photographer = this.createHasOneRepositoryFactoryFor('photographer', usersRepositoryGetter);
        this.registerInclusionResolver('photographer', this.photographer.inclusionResolver);
        this.cosplayers = this.createHasManyRepositoryFactoryFor('cosplayers', usersRepositoryGetter);
        this.registerInclusionResolver('cosplayers', this.cosplayers.inclusionResolver);
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