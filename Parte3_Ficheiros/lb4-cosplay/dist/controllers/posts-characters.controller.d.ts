import { Count, Filter, Where } from '@loopback/repository';
import { Posts, Characters } from '../models';
import { PostsRepository } from '../repositories';
export declare class PostsCharactersController {
    protected postsRepository: PostsRepository;
    constructor(postsRepository: PostsRepository);
    find(id: number, filter?: Filter<Characters>): Promise<Characters[]>;
    create(id: typeof Posts.prototype.post_id, characters: Omit<Characters, 'character_id'>): Promise<Characters>;
    patch(id: number, characters: Partial<Characters>, where?: Where<Characters>): Promise<Count>;
    delete(id: number, where?: Where<Characters>): Promise<Count>;
}
