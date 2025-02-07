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
import {Types} from '../models';
import {TypesRepository} from '../repositories';

export class TypesController {
  constructor(
    @repository(TypesRepository)
    public typesRepository : TypesRepository,
  ) {}

  @post('/types')
  @response(200, {
    description: 'Types model instance',
    content: {'application/json': {schema: getModelSchemaRef(Types)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Types, {
            title: 'NewTypes',
            exclude: ['type_id'],
          }),
        },
      },
    })
    types: Omit<Types, 'type_id'>,
  ): Promise<Types> {
    return this.typesRepository.create(types);
  }

  @get('/types/count')
  @response(200, {
    description: 'Types model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Types) where?: Where<Types>,
  ): Promise<Count> {
    return this.typesRepository.count(where);
  }

  @get('/types')
  @response(200, {
    description: 'Array of Types model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Types, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    // @param.filter(Types) filter?: Filter<Types>,
  ): Promise<Types[]> {
    return this.typesRepository.find();
  }

  @patch('/types')
  @response(200, {
    description: 'Types PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Types, {partial: true}),
        },
      },
    })
    types: Types,
    @param.where(Types) where?: Where<Types>,
  ): Promise<Count> {
    return this.typesRepository.updateAll(types, where);
  }

  @get('/types/{id}')
  @response(200, {
    description: 'Types model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Types, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    // @param.filter(Types, {exclude: 'where'}) filter?: FilterExcludingWhere<Types>
  ): Promise<Types> {
    return this.typesRepository.findById(id);
  }

  @patch('/types/{id}')
  @response(204, {
    description: 'Types PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Types, {partial: true}),
        },
      },
    })
    types: Types,
  ): Promise<void> {
    await this.typesRepository.updateById(id, types);
  }

  @put('/types/{id}')
  @response(204, {
    description: 'Types PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() types: Types,
  ): Promise<void> {
    await this.typesRepository.replaceById(id, types);
  }

  @del('/types/{id}')
  @response(204, {
    description: 'Types DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.typesRepository.deleteById(id);
  }
}
