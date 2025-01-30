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
  Media,
} from '../models';
import {CharactersRepository} from '../repositories';

export class CharactersMediaController {
  constructor(
    @repository(CharactersRepository) protected charactersRepository: CharactersRepository,
  ) { }

  @get('/characters/{id}/media', {
    responses: {
      '200': {
        description: 'Characters has one Media',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Media),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Media>,
  ): Promise<Media> {
    return this.charactersRepository.media(id).get(filter);
  }

  @post('/characters/{id}/media', {
    responses: {
      '200': {
        description: 'Characters model instance',
        content: {'application/json': {schema: getModelSchemaRef(Media)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Characters.prototype.character_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Media, {
            title: 'NewMediaInCharacters',
            exclude: ['media_id'],
            optional: ['character_id']
          }),
        },
      },
    }) media: Omit<Media, 'media_id'>,
  ): Promise<Media> {
    return this.charactersRepository.media(id).create(media);
  }

  @patch('/characters/{id}/media', {
    responses: {
      '200': {
        description: 'Characters.Media PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Media, {partial: true}),
        },
      },
    })
    media: Partial<Media>,
    @param.query.object('where', getWhereSchemaFor(Media)) where?: Where<Media>,
  ): Promise<Count> {
    return this.charactersRepository.media(id).patch(media, where);
  }

  @del('/characters/{id}/media', {
    responses: {
      '200': {
        description: 'Characters.Media DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Media)) where?: Where<Media>,
  ): Promise<Count> {
    return this.charactersRepository.media(id).delete(where);
  }
}
