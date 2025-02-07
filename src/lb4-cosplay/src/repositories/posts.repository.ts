import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
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

  public readonly post_user: BelongsToAccessor<Users, typeof Posts.prototype.post_id>;

  public readonly post_character: BelongsToAccessor<Characters, typeof Posts.prototype.post_id>;

  public readonly post_comment: HasManyRepositoryFactory<Comments, typeof Posts.prototype.post_id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('UsersRepository') protected usersRepositoryGetter: Getter<UsersRepository>, @repository.getter('CharactersRepository') protected charactersRepositoryGetter: Getter<CharactersRepository>, @repository.getter('CommentsRepository') protected commentsRepositoryGetter: Getter<CommentsRepository>,
  ) {
    super(Posts, dataSource);
    this.post_comment = this.createHasManyRepositoryFactoryFor('post_comment', commentsRepositoryGetter,);
    this.registerInclusionResolver('post_comment', this.post_comment.inclusionResolver);
    this.post_character = this.createBelongsToAccessorFor('post_character', charactersRepositoryGetter,);
    this.registerInclusionResolver('post_character', this.post_character.inclusionResolver);
    this.post_user = this.createBelongsToAccessorFor('post_user', usersRepositoryGetter,);
    this.registerInclusionResolver('post_user', this.post_user.inclusionResolver);
  }
}
