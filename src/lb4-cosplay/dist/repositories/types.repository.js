"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypesRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let TypesRepository = class TypesRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, mediasRepositoryGetter) {
        super(models_1.Types, dataSource);
        this.mediasRepositoryGetter = mediasRepositoryGetter;
        this.media_type = this.createHasManyRepositoryFactoryFor('media_type', mediasRepositoryGetter);
        this.registerInclusionResolver('media_type', this.media_type.inclusionResolver);
    }
};
exports.TypesRepository = TypesRepository;
exports.TypesRepository = TypesRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__param(1, repository_1.repository.getter('MediasRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], TypesRepository);
//# sourceMappingURL=types.repository.js.map