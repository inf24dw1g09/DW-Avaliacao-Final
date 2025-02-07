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
  Types,
  Medias,
} from '../models';
import {TypesRepository} from '../repositories';

export class TypesMediasController {
  constructor(
    @repository(TypesRepository) protected typesRepository: TypesRepository,
  ) { }

  @get('/types/{id}/medias', {
    responses: {
      '200': {
        description: 'Array of Types has many Medias',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Medias)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    // @param.query.object('filter') filter?: Filter<Medias>,
  ): Promise<Medias[]> {
    return this.typesRepository.media_type(id).find();
  }

  @post('/types/{id}/medias', {
    responses: {
      '200': {
        description: 'Types model instance',
        content: {'application/json': {schema: getModelSchemaRef(Medias)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Types.prototype.type_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medias, {
            title: 'NewMediasInTypes',
            exclude: ['media_id'],
            optional: ['type_id']
          }),
        },
      },
    }) medias: Omit<Medias, 'media_id'>,
  ): Promise<Medias> {
    return this.typesRepository.media_type(id).create(medias);
  }

  @patch('/types/{id}/medias', {
    responses: {
      '200': {
        description: 'Types.Medias PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medias, {partial: true}),
        },
      },
    })
    medias: Partial<Medias>,
    @param.query.object('where', getWhereSchemaFor(Medias)) where?: Where<Medias>,
  ): Promise<Count> {
    return this.typesRepository.media_type(id).patch(medias, where);
  }

  @del('/types/{id}/medias', {
    responses: {
      '200': {
        description: 'Types.Medias DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Medias)) where?: Where<Medias>,
  ): Promise<Count> {
    return this.typesRepository.media_type(id).delete(where);
  }
}
