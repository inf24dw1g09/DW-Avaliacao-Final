'use strict';

var utils = require('../utils/writer.js');
var CommentsController = require('../service/CommentsControllerService');

module.exports.createComment = function createComment (req, res, next, body) {
  CommentsController.createComment(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteComment = function deleteComment (req, res, next, comment_id) {
  CommentsController.deleteComment(comment_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveComment = function retrieveComment (req, res, next, comment_id) {
  CommentsController.retrieveComment(comment_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveComments = function retrieveComments (req, res, next) {
  CommentsController.retrieveComments()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateComment = function updateComment (req, res, next, body, comment_id) {
  CommentsController.updateComment(body, comment_id)
    .then(CommentsController.retrieveComment) 
    .then(function (response) {
      console.log(res)
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
