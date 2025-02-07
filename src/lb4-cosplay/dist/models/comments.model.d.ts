import { Entity } from '@loopback/repository';
export declare class Comments extends Entity {
    comment_id?: number;
    message: string;
    post_id: number;
    user_id: number;
    constructor(data?: Partial<Comments>);
}
export interface CommentsRelations {
}
export type CommentsWithRelations = Comments & CommentsRelations;
