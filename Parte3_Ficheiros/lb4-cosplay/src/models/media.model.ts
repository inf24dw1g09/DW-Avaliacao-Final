import {Entity, model, property, hasMany} from '@loopback/repository';
import {Type} from './type.model';

@model()
export class Media extends Entity {
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

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  type: string[];

  @hasMany(() => Type, {keyTo: 'media_id'})
  types: Type[];

  @property({
    type: 'number',
  })
  character_id?: number;

  constructor(data?: Partial<Media>) {
    super(data);
  }
}

export interface MediaRelations {
  // describe navigational properties here
}

export type MediaWithRelations = Media & MediaRelations;
