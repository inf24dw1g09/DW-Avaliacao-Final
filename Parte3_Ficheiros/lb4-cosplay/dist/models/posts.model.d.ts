import { Entity } from '@loopback/repository';
import { Users } from './users.model';
import { Characters } from './characters.model';
import { Comments } from './comments.model';
export declare class Posts extends Entity {
    post_id?: number;
    title: string;
    date: string;
    description?: string;
    cosplayers: Users[];
    photographer: Users;
    characters: Characters[];
    comments: Comments[];
    constructor(data?: Partial<Posts>);
}
export interface PostsRelations {
}
export type PostsWithRelations = Posts & PostsRelations;
