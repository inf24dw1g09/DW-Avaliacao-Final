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
  Characters,
} from '../models';
import {PostsRepository} from '../repositories';

export class PostsCharactersController {
  constructor(
    @repository(PostsRepository) protected postsRepository: PostsRepository,
  ) { }

  @get('/posts/{id}/characters', {
    responses: {
      '200': {
        description: 'Array of Posts has many Characters',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Characters)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Characters>,
  ): Promise<Characters[]> {
    return this.postsRepository.characters(id).find(filter);
  }

  @post('/posts/{id}/characters', {
    responses: {
      '200': {
        description: 'Posts model instance',
        content: {'application/json': {schema: getModelSchemaRef(Characters)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Posts.prototype.post_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Characters, {
            title: 'NewCharactersInPosts',
            exclude: ['character_id'],
            optional: ['post_id']
          }),
        },
      },
    }) characters: Omit<Characters, 'character_id'>,
  ): Promise<Characters> {
    return this.postsRepository.characters(id).create(characters);
  }

  @patch('/posts/{id}/characters', {
    responses: {
      '200': {
        description: 'Posts.Characters PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Characters, {partial: true}),
        },
      },
    })
    characters: Partial<Characters>,
    @param.query.object('where', getWhereSchemaFor(Characters)) where?: Where<Characters>,
  ): Promise<Count> {
    return this.postsRepository.characters(id).patch(characters, where);
  }

  @del('/posts/{id}/characters', {
    responses: {
      '200': {
        description: 'Posts.Characters DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Characters)) where?: Where<Characters>,
  ): Promise<Count> {
    return this.postsRepository.characters(id).delete(where);
  }
}
