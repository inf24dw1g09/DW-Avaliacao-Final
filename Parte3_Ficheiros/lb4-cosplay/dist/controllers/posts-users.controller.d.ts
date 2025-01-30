import { Count, Filter, Where } from '@loopback/repository';
import { Posts, Users } from '../models';
import { PostsRepository } from '../repositories';
export declare class PostsUsersController {
    protected postsRepository: PostsRepository;
    constructor(postsRepository: PostsRepository);
    find(id: number, filter?: Filter<Users>): Promise<Users[]>;
    create(id: typeof Posts.prototype.post_id, users: Omit<Users, 'user_name'>): Promise<Users>;
    patch(id: number, users: Partial<Users>, where?: Where<Users>): Promise<Count>;
    delete(id: number, where?: Where<Users>): Promise<Count>;
}
