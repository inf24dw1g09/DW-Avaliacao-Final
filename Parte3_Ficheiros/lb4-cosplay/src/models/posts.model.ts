import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
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
    type: 'date',
    required: true,
  })
  date: string;
  @property({
    type: 'string',
  })
  description?: string;

  @hasMany(() => Users, {keyTo: 'post_id_cosplayers'})
  cosplayers: Users[];

  @hasOne(() => Users, {keyTo: 'post_id_photographers'})
  photographer: Users;

  @hasMany(() => Characters, {keyTo: 'post_id'})
  characters: Characters[];

  @hasMany(() => Comments, {keyTo: 'post_id'})
  comments: Comments[];

  constructor(data?: Partial<Posts>) {
    super(data);
  }
}

export interface PostsRelations {
  // describe navigational properties here
}

export type PostsWithRelations = Posts & PostsRelations;
