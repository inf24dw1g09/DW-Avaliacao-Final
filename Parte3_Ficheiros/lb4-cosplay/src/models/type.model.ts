import {Entity, model, property} from '@loopback/repository';

@model()
export class Type extends Entity {
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

  @property({
    type: 'number',
  })
  media_id?: number;

  constructor(data?: Partial<Type>) {
    super(data);
  }
}

export interface TypeRelations {
  // describe navigational properties here
}

export type TypeWithRelations = Type & TypeRelations;
