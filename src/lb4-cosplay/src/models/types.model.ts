import {Entity, model, property, hasMany} from '@loopback/repository';
import {Medias} from './medias.model';

@model()
export class Types extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  type_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @hasMany(() => Medias, {keyTo: 'type_id'})
  media_type: Medias[];

  constructor(data?: Partial<Types>) {
    super(data);
  }
}

export interface TypesRelations {
  // describe navigational properties here
}

export type TypesWithRelations = Types & TypesRelations;
