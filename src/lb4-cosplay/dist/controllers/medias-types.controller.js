"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediasTypesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MediasTypesController = class MediasTypesController {
    constructor(mediasRepository) {
        this.mediasRepository = mediasRepository;
    }
    async getTypes(id) {
        return this.mediasRepository.type_media(id);
    }
};
exports.MediasTypesController = MediasTypesController;
tslib_1.__decorate([
    (0, rest_1.get)('/medias/{id}/types', {
        responses: {
            '200': {
                description: 'Types belonging to Medias',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Types),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediasTypesController.prototype, "getTypes", null);
exports.MediasTypesController = MediasTypesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MediasRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MediasRepository])
], MediasTypesController);
//# sourceMappingURL=medias-types.controller.js.map