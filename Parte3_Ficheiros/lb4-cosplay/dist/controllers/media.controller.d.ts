import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Media } from '../models';
import { MediaRepository } from '../repositories';
export declare class MediaController {
    mediaRepository: MediaRepository;
    constructor(mediaRepository: MediaRepository);
    create(media: Omit<Media, 'media_id'>): Promise<Media>;
    count(where?: Where<Media>): Promise<Count>;
    find(filter?: Filter<Media>): Promise<Media[]>;
    updateAll(media: Media, where?: Where<Media>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Media>): Promise<Media>;
    updateById(id: number, media: Media): Promise<void>;
    replaceById(id: number, media: Media): Promise<void>;
    deleteById(id: number): Promise<void>;
}
