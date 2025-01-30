import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Comments, CommentsRelations } from '../models';
export declare class CommentsRepository extends DefaultCrudRepository<Comments, typeof Comments.prototype.comment_id, CommentsRelations> {
    constructor(dataSource: DbDataSource);
}
