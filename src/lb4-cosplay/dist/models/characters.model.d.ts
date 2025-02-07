import { Entity } from '@loopback/repository';
import { Posts } from './posts.model';
export declare class Characters extends Entity {
    character_id?: number;
    name: string;
    description?: string;
    media_id: number;
    character_post: Posts[];
    constructor(data?: Partial<Characters>);
}
export interface CharactersRelations {
}
export type CharactersWithRelations = Characters & CharactersRelations;
