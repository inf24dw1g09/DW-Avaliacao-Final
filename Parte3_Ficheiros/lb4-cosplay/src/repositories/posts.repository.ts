import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Posts, PostsRelations, Users, Characters, Comments} from '../models';
import {UsersRepository} from './users.repository';
import {CharactersRepository} from './characters.repository';
import {CommentsRepository} from './comments.repository';

export class PostsRepository extends DefaultCrudRepository<
  Posts,
  typeof Posts.prototype.post_id,
  PostsRelations
> {

  public readonly cosplayers: HasManyRepositoryFactory<Users, typeof Posts.prototype.post_id>;

  public readonly photographer: HasOneRepositoryFactory<Users, typeof Posts.prototype.post_id>;

  public readonly characters: HasManyRepositoryFactory<Characters, typeof Posts.prototype.post_id>;

  public readonly comments: HasManyRepositoryFactory<Comments, typeof Posts.prototype.post_id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('UsersRepository') protected usersRepositoryGetter: Getter<UsersRepository>, @repository.getter('CharactersRepository') protected charactersRepositoryGetter: Getter<CharactersRepository>, @repository.getter('CommentsRepository') protected commentsRepositoryGetter: Getter<CommentsRepository>,
  ) {
    super(Posts, dataSource);
    this.comments = this.createHasManyRepositoryFactoryFor('comments', commentsRepositoryGetter,);
    this.registerInclusionResolver('comments', this.comments.inclusionResolver);
    this.characters = this.createHasManyRepositoryFactoryFor('characters', charactersRepositoryGetter,);
    this.registerInclusionResolver('characters', this.characters.inclusionResolver);
    this.photographer = this.createHasOneRepositoryFactoryFor('photographer', usersRepositoryGetter);
    this.registerInclusionResolver('photographer', this.photographer.inclusionResolver);
    this.cosplayers = this.createHasManyRepositoryFactoryFor('cosplayers', usersRepositoryGetter,);
    this.registerInclusionResolver('cosplayers', this.cosplayers.inclusionResolver);
  }
}
