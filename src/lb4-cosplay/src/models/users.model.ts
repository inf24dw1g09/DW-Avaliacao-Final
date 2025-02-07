import {Entity, model, property, hasMany} from '@loopback/repository';
import {Posts} from './posts.model';
import {Comments} from './comments.model';

@model()
export class Users extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  user_id: number;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  nickname: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @hasMany(() => Posts, {keyTo: 'user_id'})
  user_post: Posts[];

  @hasMany(() => Comments, {keyTo: 'user_id'})
  user_comment: Comments[];

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;


