import { Count, Where } from '@loopback/repository';
import { Types } from '../models';
import { TypesRepository } from '../repositories';
export declare class TypesController {
    typesRepository: TypesRepository;
    constructor(typesRepository: TypesRepository);
    create(types: Omit<Types, 'type_id'>): Promise<Types>;
    count(where?: Where<Types>): Promise<Count>;
    find(): Promise<Types[]>;
    updateAll(types: Types, where?: Where<Types>): Promise<Count>;
    findById(id: number): Promise<Types>;
    updateById(id: number, types: Types): Promise<void>;
    replaceById(id: number, types: Types): Promise<void>;
    deleteById(id: number): Promise<void>;
}
