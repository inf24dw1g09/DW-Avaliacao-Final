import { Count, FilterExcludingWhere, Where } from '@loopback/repository';
import { Users } from '../models';
import { UsersRepository } from '../repositories';
export declare class UsersController {
    usersRepository: UsersRepository;
    constructor(usersRepository: UsersRepository);
    create(users: Omit<Users, 'user_id'>): Promise<Users>;
    count(where?: Where<Users>): Promise<Count>;
    find(): Promise<(Users & import("../models").UsersRelations)[]>;
    updateAll(users: Users, where?: Where<Users>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Users>): Promise<Users>;
    updateById(id: number, users: Users): Promise<void>;
    replaceById(id: number, users: Users): Promise<void>;
    deleteById(id: number): Promise<void>;
}
