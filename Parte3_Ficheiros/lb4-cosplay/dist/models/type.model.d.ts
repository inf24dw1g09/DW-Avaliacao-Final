import { Entity } from '@loopback/repository';
export declare class Type extends Entity {
    type_id?: number;
    name: string;
    media_id?: number;
    constructor(data?: Partial<Type>);
}
export interface TypeRelations {
}
export type TypeWithRelations = Type & TypeRelations;
