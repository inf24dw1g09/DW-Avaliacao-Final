import { Characters, Medias } from '../models';
import { CharactersRepository } from '../repositories';
export declare class CharactersMediasController {
    charactersRepository: CharactersRepository;
    constructor(charactersRepository: CharactersRepository);
    getMedias(id: typeof Characters.prototype.character_id): Promise<Medias>;
}
