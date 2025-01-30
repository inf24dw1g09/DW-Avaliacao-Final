import { Entity } from '@loopback/repository';
import { Media } from './media.model';
export declare class Characters extends Entity {
    character_id?: number;
    name: string;
    description?: string;
    media: Media;
    post_id?: number;
    constructor(data?: Partial<Characters>);
}
export interface CharactersRelations {
}
export type CharactersWithRelations = Characters & CharactersRelations;
