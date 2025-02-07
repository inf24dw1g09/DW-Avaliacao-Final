import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Types, TypesRelations, Medias } from '../models';
import { MediasRepository } from './medias.repository';
export declare class TypesRepository extends DefaultCrudRepository<Types, typeof Types.prototype.type_id, TypesRelations> {
    protected mediasRepositoryGetter: Getter<MediasRepository>;
    readonly media_type: HasManyRepositoryFactory<Medias, typeof Types.prototype.type_id>;
    constructor(dataSource: DbDataSource, mediasRepositoryGetter: Getter<MediasRepository>);
}
