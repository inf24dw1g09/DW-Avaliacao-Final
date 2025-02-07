import { Comments, Users } from '../models';
import { CommentsRepository } from '../repositories';
export declare class CommentsUsersController {
    commentsRepository: CommentsRepository;
    constructor(commentsRepository: CommentsRepository);
    getUsers(id: typeof Comments.prototype.comment_id): Promise<Users>;
}
