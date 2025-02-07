import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Medias} from './medias.model';
import {Posts} from './posts.model';

@model()
export class Characters extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  character_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;
  @property({
    type: 'string',
  })
  description?: string;

  @belongsTo(() => Medias, {name: 'media_character'})
  media_id: number;

  @hasMany(() => Posts, {keyTo: 'character_id'})
  character_post: Posts[];

  constructor(data?: Partial<Characters>) {
    super(data);
  }
}

export interface CharactersRelations {
  // describe navigational properties here
}

export type CharactersWithRelations = Characters & CharactersRelations;
