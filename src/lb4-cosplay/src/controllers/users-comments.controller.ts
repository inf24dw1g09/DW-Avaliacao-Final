import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Users,
  Comments,
} from '../models';
import {UsersRepository} from '../repositories';

export class UsersCommentsController {
  constructor(
    @repository(UsersRepository) protected usersRepository: UsersRepository,
  ) { }

  @get('/users/{id}/comments', {
    responses: {
      '200': {
        description: 'Array of Users has many Comments',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Comments)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    // @param.query.object('filter') filter?: Filter<Comments>,
  ): Promise<Comments[]> {
    return this.usersRepository.user_comment(id).find();
  }

  @post('/users/{id}/comments', {
    responses: {
      '200': {
        description: 'Users model instance',
        content: {'application/json': {schema: getModelSchemaRef(Comments)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Users.prototype.user_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Comments, {
            title: 'NewCommentsInUsers',
            exclude: ['comment_id'],
            optional: ['user_id']
          }),
        },
      },
    }) comments: Omit<Comments, 'comment_id'>,
  ): Promise<Comments> {
    return this.usersRepository.user_comment(id).create(comments);
  }

  @patch('/users/{id}/comments', {
    responses: {
      '200': {
        description: 'Users.Comments PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Comments, {partial: true}),
        },
      },
    })
    comments: Partial<Comments>,
    @param.query.object('where', getWhereSchemaFor(Comments)) where?: Where<Comments>,
  ): Promise<Count> {
    return this.usersRepository.user_comment(id).patch(comments, where);
  }

  @del('/users/{id}/comments', {
    responses: {
      '200': {
        description: 'Users.Comments DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Comments)) where?: Where<Comments>,
  ): Promise<Count> {
    return this.usersRepository.user_comment(id).delete(where);
  }
}
