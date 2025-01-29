'use strict';

var utils = require('../utils/writer.js');
var PostsController = require('../service/PostsControllerService');

module.exports.createPost = function createPost (req, res, next, body) {
  PostsController.createPost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePost = function deletePost (req, res, next, post_id) {
  PostsController.deletePost(post_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievePost = function retrievePost (req, res, next, post_id) {
  PostsController.retrievePost(post_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievePosts = function retrievePosts (req, res, next) {
  PostsController.retrievePosts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePost = function updatePost (req, res, next, body, post_id) {
  PostsController.updatePost(body, post_id)
    .then(PostsController.retrievePost) 
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
