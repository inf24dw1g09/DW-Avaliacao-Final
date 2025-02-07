import { Entity } from '@loopback/repository';
import { Medias } from './medias.model';
export declare class Types extends Entity {
    type_id?: number;
    name: string;
    media_type: Medias[];
    constructor(data?: Partial<Types>);
}
export interface TypesRelations {
}
export type TypesWithRelations = Types & TypesRelations;
