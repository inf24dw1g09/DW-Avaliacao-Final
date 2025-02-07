import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Posts, PostsRelations, Users, Characters, Comments } from '../models';
import { UsersRepository } from './users.repository';
import { CharactersRepository } from './characters.repository';
import { CommentsRepository } from './comments.repository';
export declare class PostsRepository extends DefaultCrudRepository<Posts, typeof Posts.prototype.post_id, PostsRelations> {
    protected usersRepositoryGetter: Getter<UsersRepository>;
    protected charactersRepositoryGetter: Getter<CharactersRepository>;
    protected commentsRepositoryGetter: Getter<CommentsRepository>;
    readonly post_user: BelongsToAccessor<Users, typeof Posts.prototype.post_id>;
    readonly post_character: BelongsToAccessor<Characters, typeof Posts.prototype.post_id>;
    readonly post_comment: HasManyRepositoryFactory<Comments, typeof Posts.prototype.post_id>;
    constructor(dataSource: DbDataSource, usersRepositoryGetter: Getter<UsersRepository>, charactersRepositoryGetter: Getter<CharactersRepository>, commentsRepositoryGetter: Getter<CommentsRepository>);
}
