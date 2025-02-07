import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Posts} from './posts.model';
import {Users} from './users.model';

@model()
export class Comments extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  comment_id?: number;
  @property({
    type: 'string',
    required: true,
  })
  message: string;

  @belongsTo(() => Posts, {name: 'comment_post'})
  post_id: number;

  @belongsTo(() => Users, {name: 'comment_user'})
  user_id: number;

  constructor(data?: Partial<Comments>) {
    super(data);
  }
}

export interface CommentsRelations {
  // describe navigational properties here
}

export type CommentsWithRelations = Comments & CommentsRelations;
