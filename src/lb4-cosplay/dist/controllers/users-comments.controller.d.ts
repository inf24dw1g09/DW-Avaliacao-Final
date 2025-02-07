import { Count, Where } from '@loopback/repository';
import { Users, Comments } from '../models';
import { UsersRepository } from '../repositories';
export declare class UsersCommentsController {
    protected usersRepository: UsersRepository;
    constructor(usersRepository: UsersRepository);
    find(id: number): Promise<Comments[]>;
    create(id: typeof Users.prototype.user_id, comments: Omit<Comments, 'comment_id'>): Promise<Comments>;
    patch(id: number, comments: Partial<Comments>, where?: Where<Comments>): Promise<Count>;
    delete(id: number, where?: Where<Comments>): Promise<Count>;
}
