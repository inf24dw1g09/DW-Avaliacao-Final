import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Medias,
  Types,
} from '../models';
import {MediasRepository} from '../repositories';

export class MediasTypesController {
  constructor(
    @repository(MediasRepository)
    public mediasRepository: MediasRepository,
  ) { }

  @get('/medias/{id}/types', {
    responses: {
      '200': {
        description: 'Types belonging to Medias',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Types),
          },
        },
      },
    },
  })
  async getTypes(
    @param.path.number('id') id: typeof Medias.prototype.media_id,
  ): Promise<Types> {
    return this.mediasRepository.type_media(id);
  }
}
