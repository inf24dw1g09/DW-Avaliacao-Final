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
  Posts,
} from '../models';
import {UsersRepository} from '../repositories';

export class UsersPostsController {
  constructor(
    @repository(UsersRepository) protected usersRepository: UsersRepository,
  ) { }

  @get('/users/{id}/posts', {
    responses: {
      '200': {
        description: 'Array of Users has many Posts',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Posts)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    // @param.query.object('filter') filter?: Filter<Posts>,
  ): Promise<Posts[]> {
    return this.usersRepository.user_post(id).find();
  }

  @post('/users/{id}/posts', {
    responses: {
      '200': {
        description: 'Users model instance',
        content: {'application/json': {schema: getModelSchemaRef(Posts)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Users.prototype.user_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Posts, {
            title: 'NewPostsInUsers',
            exclude: ['post_id'],
            optional: ['user_id']
          }),
        },
      },
    }) posts: Omit<Posts, 'post_id'>,
  ): Promise<Posts> {
    return this.usersRepository.user_post(id).create(posts);
  }

  @patch('/users/{id}/posts', {
    responses: {
      '200': {
        description: 'Users.Posts PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Posts, {partial: true}),
        },
      },
    })
    posts: Partial<Posts>,
    @param.query.object('where', getWhereSchemaFor(Posts)) where?: Where<Posts>,
  ): Promise<Count> {
    return this.usersRepository.user_post(id).patch(posts, where);
  }

  @del('/users/{id}/posts', {
    responses: {
      '200': {
        description: 'Users.Posts DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Posts)) where?: Where<Posts>,
  ): Promise<Count> {
    return this.usersRepository.user_post(id).delete(where);
  }
}
