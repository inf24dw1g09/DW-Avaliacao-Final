import { Count, Where } from '@loopback/repository';
import { Types, Medias } from '../models';
import { TypesRepository } from '../repositories';
export declare class TypesMediasController {
    protected typesRepository: TypesRepository;
    constructor(typesRepository: TypesRepository);
    find(id: number): Promise<Medias[]>;
    create(id: typeof Types.prototype.type_id, medias: Omit<Medias, 'media_id'>): Promise<Medias>;
    patch(id: number, medias: Partial<Medias>, where?: Where<Medias>): Promise<Count>;
    delete(id: number, where?: Where<Medias>): Promise<Count>;
}
