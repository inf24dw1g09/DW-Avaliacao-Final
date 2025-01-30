import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Media, MediaRelations, Type} from '../models';
import {TypeRepository} from './type.repository';

export class MediaRepository extends DefaultCrudRepository<
  Media,
  typeof Media.prototype.media_id,
  MediaRelations
> {

  public readonly types: HasManyRepositoryFactory<Type, typeof Media.prototype.media_id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('TypeRepository') protected typeRepositoryGetter: Getter<TypeRepository>,
  ) {
    super(Media, dataSource);
    this.types = this.createHasManyRepositoryFactoryFor('types', typeRepositoryGetter,);
    this.registerInclusionResolver('types', this.types.inclusionResolver);
  }
}
