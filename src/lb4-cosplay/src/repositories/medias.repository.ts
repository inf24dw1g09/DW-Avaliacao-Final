import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Medias, MediasRelations, Types, Characters} from '../models';
import {TypesRepository} from './types.repository';
import {CharactersRepository} from './characters.repository';

export class MediasRepository extends DefaultCrudRepository<
  Medias,
  typeof Medias.prototype.media_id,
  MediasRelations
> {

  public readonly type_media: BelongsToAccessor<Types, typeof Medias.prototype.media_id>;

  public readonly character_media: HasManyRepositoryFactory<Characters, typeof Medias.prototype.media_id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('TypesRepository') protected typesRepositoryGetter: Getter<TypesRepository>, @repository.getter('CharactersRepository') protected charactersRepositoryGetter: Getter<CharactersRepository>,
  ) {
    super(Medias, dataSource);
    this.character_media = this.createHasManyRepositoryFactoryFor('character_media', charactersRepositoryGetter,);
    this.registerInclusionResolver('character_media', this.character_media.inclusionResolver);
    this.type_media = this.createBelongsToAccessorFor('type_media', typesRepositoryGetter,);
    this.registerInclusionResolver('type_media', this.type_media.inclusionResolver);
  }
}
