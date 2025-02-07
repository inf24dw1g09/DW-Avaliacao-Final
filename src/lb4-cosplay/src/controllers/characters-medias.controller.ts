import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Characters,
  Medias,
} from '../models';
import {CharactersRepository} from '../repositories';

export class CharactersMediasController {
  constructor(
    @repository(CharactersRepository)
    public charactersRepository: CharactersRepository,
  ) { }

  @get('/characters/{id}/medias', {
    responses: {
      '200': {
        description: 'Medias belonging to Characters',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Medias),
          },
        },
      },
    },
  })
  async getMedias(
    @param.path.number('id') id: typeof Characters.prototype.character_id,
  ): Promise<Medias> {
    return this.charactersRepository.media_character(id);
  }
}
