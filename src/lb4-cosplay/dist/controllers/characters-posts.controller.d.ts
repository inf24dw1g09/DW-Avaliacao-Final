import { Count, Where } from '@loopback/repository';
import { Characters, Posts } from '../models';
import { CharactersRepository } from '../repositories';
export declare class CharactersPostsController {
    protected charactersRepository: CharactersRepository;
    constructor(charactersRepository: CharactersRepository);
    find(id: number): Promise<Posts[]>;
    create(id: typeof Characters.prototype.character_id, posts: Omit<Posts, 'post_id'>): Promise<Posts>;
    patch(id: number, posts: Partial<Posts>, where?: Where<Posts>): Promise<Count>;
    delete(id: number, where?: Where<Posts>): Promise<Count>;
}
