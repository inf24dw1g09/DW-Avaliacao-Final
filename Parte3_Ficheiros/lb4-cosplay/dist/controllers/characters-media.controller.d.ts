import { Count, Filter, Where } from '@loopback/repository';
import { Characters, Media } from '../models';
import { CharactersRepository } from '../repositories';
export declare class CharactersMediaController {
    protected charactersRepository: CharactersRepository;
    constructor(charactersRepository: CharactersRepository);
    get(id: number, filter?: Filter<Media>): Promise<Media>;
    create(id: typeof Characters.prototype.character_id, media: Omit<Media, 'media_id'>): Promise<Media>;
    patch(id: number, media: Partial<Media>, where?: Where<Media>): Promise<Count>;
    delete(id: number, where?: Where<Media>): Promise<Count>;
}
