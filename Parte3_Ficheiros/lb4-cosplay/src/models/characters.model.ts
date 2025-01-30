import {Entity, model, property, hasOne} from '@loopback/repository';
import {Media} from './media.model';

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

  // @hasOne(() => Media, {keyTo: 'character_id'})
  // media: Media;

  // @property({
  //   type: 'number',
  // })
  // post_id?: number;


  // @hasOne(() => Media, {keyTo: 'character_id'})
  // media: Media;

  @property({
    type: 'number',
    required: true,
  })
  media_id?: number;

  constructor(data?: Partial<Characters>) {
    super(data);
  }
}

export interface CharactersRelations {
  // describe navigational properties here
}

export type CharactersWithRelations = Characters & CharactersRelations;
