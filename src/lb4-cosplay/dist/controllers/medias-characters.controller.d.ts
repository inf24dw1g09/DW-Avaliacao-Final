import { Count, Where } from '@loopback/repository';
import { Medias, Characters } from '../models';
import { MediasRepository } from '../repositories';
export declare class MediasCharactersController {
    protected mediasRepository: MediasRepository;
    constructor(mediasRepository: MediasRepository);
    find(id: number): Promise<Characters[]>;
    create(id: typeof Medias.prototype.media_id, characters: Omit<Characters, 'character_id'>): Promise<Characters>;
    patch(id: number, characters: Partial<Characters>, where?: Where<Characters>): Promise<Count>;
    delete(id: number, where?: Where<Characters>): Promise<Count>;
}
