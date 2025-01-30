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
  Posts,
  Users,
} from '../models';
import {PostsRepository} from '../repositories';

export class PostsUsersController {
  constructor(
    @repository(PostsRepository) protected postsRepository: PostsRepository,
  ) { }

  @get('/posts/{id}/users', {
    responses: {
      '200': {
        description: 'Array of Posts has many Users',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Users)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Users>,
  ): Promise<Users[]> {
    return this.postsRepository.cosplayers(id).find(filter);
  }

  @post('/posts/{id}/users', {
    responses: {
      '200': {
        description: 'Posts model instance',
        content: {'application/json': {schema: getModelSchemaRef(Users)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Posts.prototype.post_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Users, {
            title: 'NewUsersInPosts',
            exclude: ['user_name'],
            optional: ['post_id_cosplayers']
          }),
        },
      },
    }) users: Omit<Users, 'user_name'>,
  ): Promise<Users> {
    return this.postsRepository.cosplayers(id).create(users);
  }

  @patch('/posts/{id}/users', {
    responses: {
      '200': {
        description: 'Posts.Users PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Users, {partial: true}),
        },
      },
    })
    users: Partial<Users>,
    @param.query.object('where', getWhereSchemaFor(Users)) where?: Where<Users>,
  ): Promise<Count> {
    return this.postsRepository.cosplayers(id).patch(users, where);
  }

  @del('/posts/{id}/users', {
    responses: {
      '200': {
        description: 'Posts.Users DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Users)) where?: Where<Users>,
  ): Promise<Count> {
    return this.postsRepository.cosplayers(id).delete(where);
  }
}
