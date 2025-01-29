'use strict';

var utils = require('../utils/writer.js');
var MediaController = require('../service/MediaControllerService');

module.exports.createMedia = function createMedia (req, res, next, body) {
  MediaController.createMedia(body)
  .then(MediaController.retrieveMedia)  
  .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteMedia = function deleteMedia (req, res, next, media_id) {
  MediaController.deleteMedia(media_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveMedia = function retrieveMedia (req, res, next, media_id) {
  MediaController.retrieveMedia(media_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveMedias = function retrieveMedias (req, res, next) {
  MediaController.retrieveMedias()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateMedia = function updateMedia (req, res, next, body, media_id) {
  MediaController.updateMedia(body, media_id)
  .then(MediaController.retrieveMedia)   
  .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
