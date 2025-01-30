import { Entity } from '@loopback/repository';
export declare class Comments extends Entity {
    comment_id?: number;
    post_id: number;
    user_name: string;
    message: string;
    date: string;
    constructor(data?: Partial<Comments>);
}
export interface CommentsRelations {
}
export type CommentsWithRelations = Comments & CommentsRelations;
