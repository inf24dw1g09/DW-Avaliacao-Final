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
  Characters,
  Posts,
} from '../models';
import {CharactersRepository} from '../repositories';

export class CharactersPostsController {
  constructor(
    @repository(CharactersRepository) protected charactersRepository: CharactersRepository,
  ) { }

  @get('/characters/{id}/posts', {
    responses: {
      '200': {
        description: 'Array of Characters has many Posts',
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
    return this.charactersRepository.character_post(id).find();
  }

  @post('/characters/{id}/posts', {
    responses: {
      '200': {
        description: 'Characters model instance',
        content: {'application/json': {schema: getModelSchemaRef(Posts)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Characters.prototype.character_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Posts, {
            title: 'NewPostsInCharacters',
            exclude: ['post_id'],
            optional: ['character_id']
          }),
        },
      },
    }) posts: Omit<Posts, 'post_id'>,
  ): Promise<Posts> {
    return this.charactersRepository.character_post(id).create(posts);
  }

  @patch('/characters/{id}/posts', {
    responses: {
      '200': {
        description: 'Characters.Posts PATCH success count',
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
    return this.charactersRepository.character_post(id).patch(posts, where);
  }

  @del('/characters/{id}/posts', {
    responses: {
      '200': {
        description: 'Characters.Posts DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Posts)) where?: Where<Posts>,
  ): Promise<Count> {
    return this.charactersRepository.character_post(id).delete(where);
  }
}
