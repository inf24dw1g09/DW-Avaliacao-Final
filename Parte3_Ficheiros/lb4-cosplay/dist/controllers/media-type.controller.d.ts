import { Count, Filter, Where } from '@loopback/repository';
import { Media, Type } from '../models';
import { MediaRepository } from '../repositories';
export declare class MediaTypeController {
    protected mediaRepository: MediaRepository;
    constructor(mediaRepository: MediaRepository);
    find(id: number, filter?: Filter<Type>): Promise<Type[]>;
    create(id: typeof Media.prototype.media_id, type: Omit<Type, 'type_id'>): Promise<Type>;
    patch(id: number, type: Partial<Type>, where?: Where<Type>): Promise<Count>;
    delete(id: number, where?: Where<Type>): Promise<Count>;
}
