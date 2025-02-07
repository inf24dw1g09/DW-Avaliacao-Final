import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Users, UsersRelations, Posts, Comments } from '../models';
import { PostsRepository } from './posts.repository';
import { CommentsRepository } from './comments.repository';
export declare class UsersRepository extends DefaultCrudRepository<Users, typeof Users.prototype.user_id, UsersRelations> {
    protected postsRepositoryGetter: Getter<PostsRepository>;
    protected commentsRepositoryGetter: Getter<CommentsRepository>;
    readonly user_post: HasManyRepositoryFactory<Posts, typeof Users.prototype.user_id>;
    readonly user_comment: HasManyRepositoryFactory<Comments, typeof Users.prototype.user_id>;
    constructor(dataSource: DbDataSource, postsRepositoryGetter: Getter<PostsRepository>, commentsRepositoryGetter: Getter<CommentsRepository>);
}
