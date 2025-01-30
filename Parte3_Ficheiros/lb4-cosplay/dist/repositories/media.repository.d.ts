import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Media, MediaRelations, Type } from '../models';
import { TypeRepository } from './type.repository';
export declare class MediaRepository extends DefaultCrudRepository<Media, typeof Media.prototype.media_id, MediaRelations> {
    protected typeRepositoryGetter: Getter<TypeRepository>;
    readonly types: HasManyRepositoryFactory<Type, typeof Media.prototype.media_id>;
    constructor(dataSource: DbDataSource, typeRepositoryGetter: Getter<TypeRepository>);
}
