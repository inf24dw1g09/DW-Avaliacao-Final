import { Entity } from '@loopback/repository';
import { Posts } from './posts.model';
import { Comments } from './comments.model';
export declare class Users extends Entity {
    user_id: number;
    email: string;
    nickname: string;
    password: string;
    user_post: Posts[];
    user_comment: Comments[];
    constructor(data?: Partial<Users>);
}
export interface UsersRelations {
}
export type UsersWithRelations = Users & UsersRelations;
