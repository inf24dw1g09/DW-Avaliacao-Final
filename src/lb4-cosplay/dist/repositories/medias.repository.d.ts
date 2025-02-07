import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Medias, MediasRelations, Types, Characters } from '../models';
import { TypesRepository } from './types.repository';
import { CharactersRepository } from './characters.repository';
export declare class MediasRepository extends DefaultCrudRepository<Medias, typeof Medias.prototype.media_id, MediasRelations> {
    protected typesRepositoryGetter: Getter<TypesRepository>;
    protected charactersRepositoryGetter: Getter<CharactersRepository>;
    readonly type_media: BelongsToAccessor<Types, typeof Medias.prototype.media_id>;
    readonly character_media: HasManyRepositoryFactory<Characters, typeof Medias.prototype.media_id>;
    constructor(dataSource: DbDataSource, typesRepositoryGetter: Getter<TypesRepository>, charactersRepositoryGetter: Getter<CharactersRepository>);
}
