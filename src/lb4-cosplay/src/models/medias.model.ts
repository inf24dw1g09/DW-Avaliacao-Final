import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Types} from './types.model';
import {Characters} from './characters.model';

@model()
export class Medias extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  media_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @belongsTo(() => Types, {name: 'type_media'})
  type_id: number;

  @hasMany(() => Characters, {keyTo: 'media_id'})
  character_media: Characters[];

  constructor(data?: Partial<Medias>) {
    super(data);
  }
}

export interface MediasRelations {
  // describe navigational properties here
}

export type MediasWithRelations = Medias & MediasRelations;
