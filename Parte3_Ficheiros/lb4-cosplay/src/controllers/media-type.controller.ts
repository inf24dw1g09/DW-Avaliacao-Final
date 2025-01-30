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
  Media,
  Type,
} from '../models';
import {MediaRepository} from '../repositories';

export class MediaTypeController {
  constructor(
    @repository(MediaRepository) protected mediaRepository: MediaRepository,
  ) { }

  @get('/media/{id}/types', {
    responses: {
      '200': {
        description: 'Array of Media has many Type',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Type)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Type>,
  ): Promise<Type[]> {
    return this.mediaRepository.types(id).find(filter);
  }

  @post('/media/{id}/types', {
    responses: {
      '200': {
        description: 'Media model instance',
        content: {'application/json': {schema: getModelSchemaRef(Type)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Media.prototype.media_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Type, {
            title: 'NewTypeInMedia',
            exclude: ['type_id'],
            optional: ['media_id']
          }),
        },
      },
    }) type: Omit<Type, 'type_id'>,
  ): Promise<Type> {
    return this.mediaRepository.types(id).create(type);
  }

  @patch('/media/{id}/types', {
    responses: {
      '200': {
        description: 'Media.Type PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Type, {partial: true}),
        },
      },
    })
    type: Partial<Type>,
    @param.query.object('where', getWhereSchemaFor(Type)) where?: Where<Type>,
  ): Promise<Count> {
    return this.mediaRepository.types(id).patch(type, where);
  }

  @del('/media/{id}/types', {
    responses: {
      '200': {
        description: 'Media.Type DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Type)) where?: Where<Type>,
  ): Promise<Count> {
    return this.mediaRepository.types(id).delete(where);
  }
}
