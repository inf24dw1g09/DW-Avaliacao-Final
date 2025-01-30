import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Characters, CharactersRelations, Media } from '../models';
import { MediaRepository } from './media.repository';
export declare class CharactersRepository extends DefaultCrudRepository<Characters, typeof Characters.prototype.character_id, CharactersRelations> {
    protected mediaRepositoryGetter: Getter<MediaRepository>;
    readonly media: HasOneRepositoryFactory<Media, typeof Characters.prototype.character_id>;
    constructor(dataSource: DbDataSource, mediaRepositoryGetter: Getter<MediaRepository>);
}
