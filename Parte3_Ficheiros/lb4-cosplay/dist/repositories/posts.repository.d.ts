import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, HasOneRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Posts, PostsRelations, Users, Characters, Comments } from '../models';
import { UsersRepository } from './users.repository';
import { CharactersRepository } from './characters.repository';
import { CommentsRepository } from './comments.repository';
export declare class PostsRepository extends DefaultCrudRepository<Posts, typeof Posts.prototype.post_id, PostsRelations> {
    protected usersRepositoryGetter: Getter<UsersRepository>;
    protected charactersRepositoryGetter: Getter<CharactersRepository>;
    protected commentsRepositoryGetter: Getter<CommentsRepository>;
    readonly cosplayers: HasManyRepositoryFactory<Users, typeof Posts.prototype.post_id>;
    readonly photographer: HasOneRepositoryFactory<Users, typeof Posts.prototype.post_id>;
    readonly characters: HasManyRepositoryFactory<Characters, typeof Posts.prototype.post_id>;
    readonly comments: HasManyRepositoryFactory<Comments, typeof Posts.prototype.post_id>;
    constructor(dataSource: DbDataSource, usersRepositoryGetter: Getter<UsersRepository>, charactersRepositoryGetter: Getter<CharactersRepository>, commentsRepositoryGetter: Getter<CommentsRepository>);
}
