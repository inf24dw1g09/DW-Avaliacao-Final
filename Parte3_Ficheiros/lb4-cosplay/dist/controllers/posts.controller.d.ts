import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Posts } from '../models';
import { PostsRepository } from '../repositories';
export declare class PostsController {
    postsRepository: PostsRepository;
    constructor(postsRepository: PostsRepository);
    create(posts: Omit<Posts, 'post_id'>): Promise<Posts>;
    count(where?: Where<Posts>): Promise<Count>;
    find(filter?: Filter<Posts>): Promise<Posts[]>;
    updateAll(posts: Posts, where?: Where<Posts>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Posts>): Promise<Posts>;
    updateById(id: number, posts: Posts): Promise<void>;
    replaceById(id: number, posts: Posts): Promise<void>;
    deleteById(id: number): Promise<void>;
}
