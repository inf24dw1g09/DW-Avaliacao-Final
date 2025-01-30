import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Type, TypeRelations } from '../models';
export declare class TypeRepository extends DefaultCrudRepository<Type, typeof Type.prototype.type_id, TypeRelations> {
    constructor(dataSource: DbDataSource);
}
