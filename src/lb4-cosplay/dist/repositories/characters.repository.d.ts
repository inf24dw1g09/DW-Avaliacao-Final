import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Characters, CharactersRelations, Medias, Posts } from '../models';
import { MediasRepository } from './medias.repository';
import { PostsRepository } from './posts.repository';
export declare class CharactersRepository extends DefaultCrudRepository<Characters, typeof Characters.prototype.character_id, CharactersRelations> {
    protected mediasRepositoryGetter: Getter<MediasRepository>;
    protected postsRepositoryGetter: Getter<PostsRepository>;
    readonly media_character: BelongsToAccessor<Medias, typeof Characters.prototype.character_id>;
    readonly character_post: HasManyRepositoryFactory<Posts, typeof Characters.prototype.character_id>;
    constructor(dataSource: DbDataSource, mediasRepositoryGetter: Getter<MediasRepository>, postsRepositoryGetter: Getter<PostsRepository>);
}
