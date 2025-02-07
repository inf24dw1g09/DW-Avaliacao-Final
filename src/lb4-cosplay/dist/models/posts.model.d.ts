import { Entity } from '@loopback/repository';
import { Comments } from './comments.model';
export declare class Posts extends Entity {
    post_id?: number;
    title: string;
    description?: string;
    user_id: number;
    character_id: number;
    post_comment: Comments[];
    constructor(data?: Partial<Posts>);
}
export interface PostsRelations {
}
export type PostsWithRelations = Posts & PostsRelations;
