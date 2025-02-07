import { Entity } from '@loopback/repository';
import { Characters } from './characters.model';
export declare class Medias extends Entity {
    media_id?: number;
    name: string;
    type_id: number;
    character_media: Characters[];
    constructor(data?: Partial<Medias>);
}
export interface MediasRelations {
}
export type MediasWithRelations = Medias & MediasRelations;
