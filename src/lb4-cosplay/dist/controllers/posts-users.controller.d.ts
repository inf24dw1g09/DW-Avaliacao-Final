import { Posts, Users } from '../models';
import { PostsRepository } from '../repositories';
export declare class PostsUsersController {
    postsRepository: PostsRepository;
    constructor(postsRepository: PostsRepository);
    getUsers(id: typeof Posts.prototype.post_id): Promise<Users>;
}
