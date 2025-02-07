"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediasRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let MediasRepository = class MediasRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, typesRepositoryGetter, charactersRepositoryGetter) {
        super(models_1.Medias, dataSource);
        this.typesRepositoryGetter = typesRepositoryGetter;
        this.charactersRepositoryGetter = charactersRepositoryGetter;
        this.character_media = this.createHasManyRepositoryFactoryFor('character_media', charactersRepositoryGetter);
        this.registerInclusionResolver('character_media', this.character_media.inclusionResolver);
        this.type_media = this.createBelongsToAccessorFor('type_media', typesRepositoryGetter);
        this.registerInclusionResolver('type_media', this.type_media.inclusionResolver);
    }
};
exports.MediasRepository = MediasRepository;
exports.MediasRepository = MediasRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__param(1, repository_1.repository.getter('TypesRepository')),
    tslib_1.__param(2, repository_1.repository.getter('CharactersRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function, Function])
], MediasRepository);
//# sourceMappingURL=medias.repository.js.map