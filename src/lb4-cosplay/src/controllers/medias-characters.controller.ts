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
  Medias,
  Characters,
} from '../models';
import {MediasRepository} from '../repositories';

export class MediasCharactersController {
  constructor(
    @repository(MediasRepository) protected mediasRepository: MediasRepository,
  ) { }

  @get('/medias/{id}/characters', {
    responses: {
      '200': {
        description: 'Array of Medias has many Characters',
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
    // @param.query.object('filter') filter?: Filter<Characters>,
  ): Promise<Characters[]> {
    return this.mediasRepository.character_media(id).find();
  }

  @post('/medias/{id}/characters', {
    responses: {
      '200': {
        description: 'Medias model instance',
        content: {'application/json': {schema: getModelSchemaRef(Characters)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Medias.prototype.media_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Characters, {
            title: 'NewCharactersInMedias',
            exclude: ['character_id'],
            optional: ['media_id']
          }),
        },
      },
    }) characters: Omit<Characters, 'character_id'>,
  ): Promise<Characters> {
    return this.mediasRepository.character_media(id).create(characters);
  }

  @patch('/medias/{id}/characters', {
    responses: {
      '200': {
        description: 'Medias.Characters PATCH success count',
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
    return this.mediasRepository.character_media(id).patch(characters, where);
  }

  @del('/medias/{id}/characters', {
    responses: {
      '200': {
        description: 'Medias.Characters DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Characters)) where?: Where<Characters>,
  ): Promise<Count> {
    return this.mediasRepository.character_media(id).delete(where);
  }
}
