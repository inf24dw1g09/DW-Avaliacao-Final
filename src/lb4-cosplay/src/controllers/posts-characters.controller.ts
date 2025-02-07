import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Posts,
  Characters,
} from '../models';
import {PostsRepository} from '../repositories';

export class PostsCharactersController {
  constructor(
    @repository(PostsRepository)
    public postsRepository: PostsRepository,
  ) { }

  @get('/posts/{id}/characters', {
    responses: {
      '200': {
        description: 'Characters belonging to Posts',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Characters),
          },
        },
      },
    },
  })
  async getCharacters(
    @param.path.number('id') id: typeof Posts.prototype.post_id,
  ): Promise<Characters> {
    return this.postsRepository.post_character(id);
  }
}
