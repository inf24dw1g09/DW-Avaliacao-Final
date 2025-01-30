import { Entity } from '@loopback/repository';
import { Type } from './type.model';
export declare class Media extends Entity {
    media_id?: number;
    name: string;
    type: string[];
    types: Type[];
    character_id?: number;
    constructor(data?: Partial<Media>);
}
export interface MediaRelations {
}
export type MediaWithRelations = Media & MediaRelations;
