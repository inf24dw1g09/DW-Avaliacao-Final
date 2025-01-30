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
  Posts,
  Comments,
} from '../models';
import {PostsRepository} from '../repositories';

export class PostsCommentsController {
  constructor(
    @repository(PostsRepository) protected postsRepository: PostsRepository,
  ) { }

  @get('/posts/{id}/comments', {
    responses: {
      '200': {
        description: 'Array of Posts has many Comments',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Comments)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Comments>,
  ): Promise<Comments[]> {
    return this.postsRepository.comments(id).find(filter);
  }

  @post('/posts/{id}/comments', {
    responses: {
      '200': {
        description: 'Posts model instance',
        content: {'application/json': {schema: getModelSchemaRef(Comments)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Posts.prototype.post_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Comments, {
            title: 'NewCommentsInPosts',
            exclude: ['comment_id'],
            optional: ['post_id']
          }),
        },
      },
    }) comments: Omit<Comments, 'comment_id'>,
  ): Promise<Comments> {
    return this.postsRepository.comments(id).create(comments);
  }

  @patch('/posts/{id}/comments', {
    responses: {
      '200': {
        description: 'Posts.Comments PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Comments, {partial: true}),
        },
      },
    })
    comments: Partial<Comments>,
    @param.query.object('where', getWhereSchemaFor(Comments)) where?: Where<Comments>,
  ): Promise<Count> {
    return this.postsRepository.comments(id).patch(comments, where);
  }

  @del('/posts/{id}/comments', {
    responses: {
      '200': {
        description: 'Posts.Comments DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Comments)) where?: Where<Comments>,
  ): Promise<Count> {
    return this.postsRepository.comments(id).delete(where);
  }
}
