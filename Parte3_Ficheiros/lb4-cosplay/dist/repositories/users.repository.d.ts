import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Users, UsersRelations } from '../models';
export declare class UsersRepository extends DefaultCrudRepository<Users, typeof Users.prototype.user_name, UsersRelations> {
    constructor(dataSource: DbDataSource);
}
