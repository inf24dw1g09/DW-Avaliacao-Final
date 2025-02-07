"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersMediasController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CharactersMediasController = class CharactersMediasController {
    constructor(charactersRepository) {
        this.charactersRepository = charactersRepository;
    }
    async getMedias(id) {
        return this.charactersRepository.media_character(id);
    }
};
exports.CharactersMediasController = CharactersMediasController;
tslib_1.__decorate([
    (0, rest_1.get)('/characters/{id}/medias', {
        responses: {
            '200': {
                description: 'Medias belonging to Characters',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Medias),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CharactersMediasController.prototype, "getMedias", null);
exports.CharactersMediasController = CharactersMediasController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CharactersRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CharactersRepository])
], CharactersMediasController);
//# sourceMappingURL=characters-medias.controller.js.map