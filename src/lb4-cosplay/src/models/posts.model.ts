import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Users} from './users.model';
import {Characters} from './characters.model';
import {Comments} from './comments.model';

@model()
export class Posts extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  post_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;
  @property({
    type: 'string',
  })
  description?: string;

  @belongsTo(() => Users, {name: 'post_user'})
  user_id: number;

  @belongsTo(() => Characters, {name: 'post_character'})
  character_id: number;

  @hasMany(() => Comments, {keyTo: 'post_id'})
  post_comment: Comments[];

  constructor(data?: Partial<Posts>) {
    super(data);
  }
}

export interface PostsRelations {
  // describe navigational properties here
}

export type PostsWithRelations = Posts & PostsRelations;
