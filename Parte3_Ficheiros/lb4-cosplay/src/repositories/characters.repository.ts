import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Characters, CharactersRelations, Media} from '../models';
import {MediaRepository} from './media.repository';

export class CharactersRepository extends DefaultCrudRepository<
  Characters,
  typeof Characters.prototype.character_id,
  CharactersRelations
> {

  public readonly media: HasOneRepositoryFactory<Media, typeof Characters.prototype.character_id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MediaRepository') protected mediaRepositoryGetter: Getter<MediaRepository>,
  ) {
    super(Characters, dataSource);
    this.media = this.createHasOneRepositoryFactoryFor('media', mediaRepositoryGetter);
    this.registerInclusionResolver('media', this.media.inclusionResolver);
  }
}
