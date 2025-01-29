'use strict';

var utils = require('../utils/writer.js');
var CharactersController = require('../service/CharactersControllerService');

module.exports.createCharacter = function createCharacter (req, res, next, body) {
  CharactersController.createCharacter(body)
  .then(CharactersController.retrieveCharacter)  
  .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCharacter = function deleteCharacter (req, res, next, character_id) {
  CharactersController.deleteCharacter(character_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveCharacter = function retrieveCharacter (req, res, next, character_id) {
  CharactersController.retrieveCharacter(character_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveCharacters = function retrieveCharacters (req, res, next) {
  CharactersController.retrieveCharacters()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCharacter = function updateCharacter (req, res, next, body, character_id) {
  CharactersController.updateCharacter(body, character_id)
  .then(CharactersController.retrieveCharacter)  
  .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
