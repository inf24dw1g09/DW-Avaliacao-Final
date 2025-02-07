import { Count, Where } from '@loopback/repository';
import { Comments } from '../models';
import { CommentsRepository } from '../repositories';
export declare class CommentsController {
    commentsRepository: CommentsRepository;
    constructor(commentsRepository: CommentsRepository);
    create(comments: Omit<Comments, 'comment_id'>): Promise<Comments>;
    count(where?: Where<Comments>): Promise<Count>;
    find(): Promise<Comments[]>;
    updateAll(comments: Comments, where?: Where<Comments>): Promise<Count>;
    findById(id: number): Promise<Comments>;
    updateById(id: number, comments: Comments): Promise<void>;
    replaceById(id: number, comments: Comments): Promise<void>;
    deleteById(id: number): Promise<void>;
}
