import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Comments, CommentsRelations, Posts, Users } from '../models';
import { PostsRepository } from './posts.repository';
import { UsersRepository } from './users.repository';
export declare class CommentsRepository extends DefaultCrudRepository<Comments, typeof Comments.prototype.comment_id, CommentsRelations> {
    protected postsRepositoryGetter: Getter<PostsRepository>;
    protected usersRepositoryGetter: Getter<UsersRepository>;
    readonly comment_post: BelongsToAccessor<Posts, typeof Comments.prototype.comment_id>;
    readonly comment_user: BelongsToAccessor<Users, typeof Comments.prototype.comment_id>;
    constructor(dataSource: DbDataSource, postsRepositoryGetter: Getter<PostsRepository>, usersRepositoryGetter: Getter<UsersRepository>);
}
