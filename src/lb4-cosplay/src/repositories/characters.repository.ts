import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Characters, CharactersRelations, Medias, Posts} from '../models';
import {MediasRepository} from './medias.repository';
import {PostsRepository} from './posts.repository';

export class CharactersRepository extends DefaultCrudRepository<
  Characters,
  typeof Characters.prototype.character_id,
  CharactersRelations
> {

  public readonly media_character: BelongsToAccessor<Medias, typeof Characters.prototype.character_id>;

  public readonly character_post: HasManyRepositoryFactory<Posts, typeof Characters.prototype.character_id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MediasRepository') protected mediasRepositoryGetter: Getter<MediasRepository>, @repository.getter('PostsRepository') protected postsRepositoryGetter: Getter<PostsRepository>,
  ) {
    super(Characters, dataSource);
    this.character_post = this.createHasManyRepositoryFactoryFor('character_post', postsRepositoryGetter,);
    this.registerInclusionResolver('character_post', this.character_post.inclusionResolver);
    this.media_character = this.createBelongsToAccessorFor('media_character', mediasRepositoryGetter,);
    this.registerInclusionResolver('media_character', this.media_character.inclusionResolver);
  }
}
