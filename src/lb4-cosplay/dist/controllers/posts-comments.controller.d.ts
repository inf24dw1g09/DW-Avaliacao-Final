import { Count, Where } from '@loopback/repository';
import { Posts, Comments } from '../models';
import { PostsRepository } from '../repositories';
export declare class PostsCommentsController {
    protected postsRepository: PostsRepository;
    constructor(postsRepository: PostsRepository);
    find(id: number): Promise<Comments[]>;
    create(id: typeof Posts.prototype.post_id, comments: Omit<Comments, 'comment_id'>): Promise<Comments>;
    patch(id: number, comments: Partial<Comments>, where?: Where<Comments>): Promise<Count>;
    delete(id: number, where?: Where<Comments>): Promise<Count>;
}
