"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let CharactersRepository = class CharactersRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, mediasRepositoryGetter, postsRepositoryGetter) {
        super(models_1.Characters, dataSource);
        this.mediasRepositoryGetter = mediasRepositoryGetter;
        this.postsRepositoryGetter = postsRepositoryGetter;
        this.character_post = this.createHasManyRepositoryFactoryFor('character_post', postsRepositoryGetter);
        this.registerInclusionResolver('character_post', this.character_post.inclusionResolver);
        this.media_character = this.createBelongsToAccessorFor('media_character', mediasRepositoryGetter);
        this.registerInclusionResolver('media_character', this.media_character.inclusionResolver);
    }
};
exports.CharactersRepository = CharactersRepository;
exports.CharactersRepository = CharactersRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__param(1, repository_1.repository.getter('MediasRepository')),
    tslib_1.__param(2, repository_1.repository.getter('PostsRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function, Function])
], CharactersRepository);
//# sourceMappingURL=characters.repository.js.map