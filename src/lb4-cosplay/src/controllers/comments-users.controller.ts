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
  Users,
} from '../models';
import {CommentsRepository} from '../repositories';

export class CommentsUsersController {
  constructor(
    @repository(CommentsRepository)
    public commentsRepository: CommentsRepository,
  ) { }

  @get('/comments/{id}/users', {
    responses: {
      '200': {
        description: 'Users belonging to Comments',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Users),
          },
        },
      },
    },
  })
  async getUsers(
    @param.path.number('id') id: typeof Comments.prototype.comment_id,
  ): Promise<Users> {
    return this.commentsRepository.comment_user(id);
  }
}
