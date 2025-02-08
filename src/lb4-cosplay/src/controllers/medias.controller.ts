import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Medias} from '../models';
import {MediasRepository} from '../repositories';

export class MediasController {
  constructor(
    @repository(MediasRepository)
    public mediasRepository : MediasRepository,
  ) {}

  @post('/medias')
  @response(200, {
    description: 'Medias model instance',
    content: {'application/json': {schema: getModelSchemaRef(Medias)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medias, {
            title: 'NewMedias',
            exclude: ['media_id'],
          }),
        },
      },
    })
    medias: Omit<Medias, 'media_id'>,
  ): Promise<Medias> {
    return this.mediasRepository.create(medias);
  }

  @get('/medias/count')
  @response(200, {
    description: 'Medias model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Medias) where?: Where<Medias>,
  ): Promise<Count> {
    return this.mediasRepository.count(where);
  }

  @get('/medias')
  @response(200, {
    description: 'Array of Medias model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Medias, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    //@param.filter(Medias) filter?: Filter<Medias>,
  ): Promise<Medias[]> {
    return this.mediasRepository.find();
  }

  @patch('/medias')
  @response(200, {
    description: 'Medias PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medias, {partial: true}),
        },
      },
    })
    medias: Medias,
    @param.where(Medias) where?: Where<Medias>,
  ): Promise<Count> {
    return this.mediasRepository.updateAll(medias, where);
  }

  @get('/medias/{id}')
  @response(200, {
    description: 'Medias model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Medias, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    // @param.filter(Medias, {exclude: 'where'}) filter?: FilterExcludingWhere<Medias>
  ): Promise<Medias> {
    return this.mediasRepository.findById(id);
  }

  @patch('/medias/{id}')
  @response(204, {
    description: 'Medias PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medias, {partial: true}),
        },
      },
    })
    medias: Medias,
  ): Promise<void> {
    await this.mediasRepository.updateById(id, medias);
  }

  @put('/medias/{id}')
  @response(204, {
    description: 'Medias PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() medias: Medias,
  ): Promise<Medias> {
      await this.mediasRepository.replaceById(id, medias);
      return medias;
  }

  @del('/medias/{id}')
  @response(204, {
    description: 'Medias DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.mediasRepository.deleteById(id);
  }
}
