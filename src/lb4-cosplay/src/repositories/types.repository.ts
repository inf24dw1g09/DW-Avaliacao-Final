import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Types, TypesRelations, Medias} from '../models';
import {MediasRepository} from './medias.repository';

export class TypesRepository extends DefaultCrudRepository<
  Types,
  typeof Types.prototype.type_id,
  TypesRelations
> {

  public readonly media_type: HasManyRepositoryFactory<Medias, typeof Types.prototype.type_id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MediasRepository') protected mediasRepositoryGetter: Getter<MediasRepository>,
  ) {
    super(Types, dataSource);
    this.media_type = this.createHasManyRepositoryFactoryFor('media_type', mediasRepositoryGetter,);
    this.registerInclusionResolver('media_type', this.media_type.inclusionResolver);
  }
}
