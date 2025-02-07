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
import {Characters} from '../models';
import {CharactersRepository} from '../repositories';

export class CharactersController {
  constructor(
    @repository(CharactersRepository)
    public charactersRepository : CharactersRepository,
  ) {}

  @post('/characters')
  @response(200, {
    description: 'Characters model instance',
    content: {'application/json': {schema: getModelSchemaRef(Characters)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Characters, {
            title: 'NewCharacters',
            exclude: ['character_id'],
          }),
        },
      },
    })
    characters: Omit<Characters, 'character_id'>,
  ): Promise<Characters> {
    return this.charactersRepository.create(characters);
  }

  @get('/characters/count')
  @response(200, {
    description: 'Characters model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Characters) where?: Where<Characters>,
  ): Promise<Count> {
    return this.charactersRepository.count(where);
  }

  @get('/characters')
  @response(200, {
    description: 'Array of Characters model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Characters, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    // @param.filter(Characters) filter?: Filter<Characters>,
  ): Promise<Characters[]> {
    return this.charactersRepository.find();
  }

  @patch('/characters')
  @response(200, {
    description: 'Characters PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Characters, {partial: true}),
        },
      },
    })
    characters: Characters,
    @param.where(Characters) where?: Where<Characters>,
  ): Promise<Count> {
    return this.charactersRepository.updateAll(characters, where);
  }

  @get('/characters/{id}')
  @response(200, {
    description: 'Characters model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Characters, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    // @param.filter(Characters, {exclude: 'where'}) filter?: FilterExcludingWhere<Characters>
  ): Promise<Characters> {
    return this.charactersRepository.findById(id);
  }

  @patch('/characters/{id}')
  @response(204, {
    description: 'Characters PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Characters, {partial: true}),
        },
      },
    })
    characters: Characters,
  ): Promise<void> {
    await this.charactersRepository.updateById(id, characters);
  }

  @put('/characters/{id}')
  @response(204, {
    description: 'Characters PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() characters: Characters,
  ): Promise<void> {
    await this.charactersRepository.replaceById(id, characters);
  }

  @del('/characters/{id}')
  @response(204, {
    description: 'Characters DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.charactersRepository.deleteById(id);
  }
}
