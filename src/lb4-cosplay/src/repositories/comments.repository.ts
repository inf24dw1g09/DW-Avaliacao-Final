import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Comments, CommentsRelations, Posts, Users} from '../models';
import {PostsRepository} from './posts.repository';
import {UsersRepository} from './users.repository';

export class CommentsRepository extends DefaultCrudRepository<
  Comments,
  typeof Comments.prototype.comment_id,
  CommentsRelations
> {

  public readonly comment_post: BelongsToAccessor<Posts, typeof Comments.prototype.comment_id>;

  public readonly comment_user: BelongsToAccessor<Users, typeof Comments.prototype.comment_id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('PostsRepository') protected postsRepositoryGetter: Getter<PostsRepository>, @repository.getter('UsersRepository') protected usersRepositoryGetter: Getter<UsersRepository>,
  ) {
    super(Comments, dataSource);
    this.comment_user = this.createBelongsToAccessorFor('comment_user', usersRepositoryGetter,);
    this.registerInclusionResolver('comment_user', this.comment_user.inclusionResolver);
    this.comment_post = this.createBelongsToAccessorFor('comment_post', postsRepositoryGetter,);
    this.registerInclusionResolver('comment_post', this.comment_post.inclusionResolver);
  }
}
