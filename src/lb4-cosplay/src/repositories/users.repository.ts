import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Users, UsersRelations, Posts, Comments} from '../models';
import {PostsRepository} from './posts.repository';
import {CommentsRepository} from './comments.repository';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.user_id,
  UsersRelations
> {

  public readonly user_post: HasManyRepositoryFactory<Posts, typeof Users.prototype.user_id>;

  public readonly user_comment: HasManyRepositoryFactory<Comments, typeof Users.prototype.user_id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('PostsRepository') protected postsRepositoryGetter: Getter<PostsRepository>, @repository.getter('CommentsRepository') protected commentsRepositoryGetter: Getter<CommentsRepository>,
  ) {
    super(Users, dataSource);
    this.user_comment = this.createHasManyRepositoryFactoryFor('user_comment', commentsRepositoryGetter,);
    this.registerInclusionResolver('user_comment', this.user_comment.inclusionResolver);
    this.user_post = this.createHasManyRepositoryFactoryFor('user_post', postsRepositoryGetter,);
    this.registerInclusionResolver('user_post', this.user_post.inclusionResolver);
  }
}
