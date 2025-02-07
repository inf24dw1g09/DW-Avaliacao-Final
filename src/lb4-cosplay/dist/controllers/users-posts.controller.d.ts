import { Count, Where } from '@loopback/repository';
import { Users, Posts } from '../models';
import { UsersRepository } from '../repositories';
export declare class UsersPostsController {
    protected usersRepository: UsersRepository;
    constructor(usersRepository: UsersRepository);
    find(id: number): Promise<Posts[]>;
    create(id: typeof Users.prototype.user_id, posts: Omit<Posts, 'post_id'>): Promise<Posts>;
    patch(id: number, posts: Partial<Posts>, where?: Where<Posts>): Promise<Count>;
    delete(id: number, where?: Where<Posts>): Promise<Count>;
}
