import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Comments,
  Posts,
} from '../models';
import {CommentsRepository} from '../repositories';

export class CommentsPostsController {
  constructor(
    @repository(CommentsRepository)
    public commentsRepository: CommentsRepository,
  ) { }

  @get('/comments/{id}/posts', {
    responses: {
      '200': {
        description: 'Posts belonging to Comments',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Posts),
          },
        },
      },
    },
  })
  async getPosts(
    @param.path.number('id') id: typeof Comments.prototype.comment_id,
  ): Promise<Posts> {
    return this.commentsRepository.comment_post(id);
  }
}
