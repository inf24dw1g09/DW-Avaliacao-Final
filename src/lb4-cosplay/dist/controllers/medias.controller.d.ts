import { Count, Where } from '@loopback/repository';
import { Medias } from '../models';
import { MediasRepository } from '../repositories';
export declare class MediasController {
    mediasRepository: MediasRepository;
    constructor(mediasRepository: MediasRepository);
    create(medias: Omit<Medias, 'media_id'>): Promise<Medias>;
    count(where?: Where<Medias>): Promise<Count>;
    find(): Promise<Medias[]>;
    updateAll(medias: Medias, where?: Where<Medias>): Promise<Count>;
    findById(id: number): Promise<Medias>;
    updateById(id: number, medias: Medias): Promise<void>;
    replaceById(id: number, medias: Medias): Promise<Medias>;
    deleteById(id: number): Promise<void>;
}
