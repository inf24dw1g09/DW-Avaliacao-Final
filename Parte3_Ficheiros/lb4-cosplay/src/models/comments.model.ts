import {Entity, model, property} from '@loopback/repository';

@model()
export class Comments extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  comment_id?: number;

  @property({
    type: 'number',
    required: true,
  })
  post_id: number;

  @property({
    type: 'string',
    required: true,
  })
  user_name: string;

  @property({
    type: 'string',
    required: true,
  })
  message: string;

  @property({
    type: 'date',
    required: true,
  })
  date: string;


  constructor(data?: Partial<Comments>) {
    super(data);
  }
}

export interface CommentsRelations {
  // describe navigational properties here
}

export type CommentsWithRelations = Comments & CommentsRelations;
