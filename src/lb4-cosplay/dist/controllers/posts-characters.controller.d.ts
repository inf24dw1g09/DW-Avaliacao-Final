import { Posts, Characters } from '../models';
import { PostsRepository } from '../repositories';
export declare class PostsCharactersController {
    postsRepository: PostsRepository;
    constructor(postsRepository: PostsRepository);
    getCharacters(id: typeof Posts.prototype.post_id): Promise<Characters>;
}
