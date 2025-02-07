import { Medias, Types } from '../models';
import { MediasRepository } from '../repositories';
export declare class MediasTypesController {
    mediasRepository: MediasRepository;
    constructor(mediasRepository: MediasRepository);
    getTypes(id: typeof Medias.prototype.media_id): Promise<Types>;
}
