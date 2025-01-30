import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Characters } from '../models';
import { CharactersRepository } from '../repositories';
export declare class CharactersController {
    charactersRepository: CharactersRepository;
    constructor(charactersRepository: CharactersRepository);
    create(characters: Omit<Characters, 'character_id'>): Promise<Characters>;
    count(where?: Where<Characters>): Promise<Count>;
    find(filter?: Filter<Characters>): Promise<Characters[]>;
    updateAll(characters: Characters, where?: Where<Characters>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Characters>): Promise<Characters>;
    updateById(id: number, characters: Characters): Promise<void>;
    replaceById(id: number, characters: Characters): Promise<void>;
    deleteById(id: number): Promise<void>;
}
