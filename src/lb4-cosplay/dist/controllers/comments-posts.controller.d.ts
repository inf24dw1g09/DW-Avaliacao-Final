import { Comments, Posts } from '../models';
import { CommentsRepository } from '../repositories';
export declare class CommentsPostsController {
    commentsRepository: CommentsRepository;
    constructor(commentsRepository: CommentsRepository);
    getPosts(id: typeof Comments.prototype.comment_id): Promise<Posts>;
}
