import { Entity } from '@loopback/repository';
export declare class Users extends Entity {
    user_name: string;
    email: string;
    password: string;
    nickname: string;
    post_id_cosplayers?: number;
    post_id_photographers?: number;
    constructor(data?: Partial<Users>);
}
export interface UsersRelations {
}
export type UsersWithRelations = Users & UsersRelations;
