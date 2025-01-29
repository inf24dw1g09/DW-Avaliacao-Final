'use strict';

var utils = require('../utils/writer.js');
var UsersController = require('../service/UsersControllerService');

module.exports.createUser = function createUser (req, res, next, body) {
  UsersController.createUser(body)
  // .then(UsersController.retrieveUser)  
  .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUser = function deleteUser (req, res, next, user_name) {
  UsersController.deleteUser(user_name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveUser = function retrieveUser (req, res, next, user_name) {
  UsersController.retrieveUser(user_name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveUsers = function retrieveUsers (req, res, next) {
  UsersController.retrieveUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUser = function updateUser (req, res, next, body, user_name) {
  UsersController.updateUser(body, user_name)
  .then(UsersController.retrieveUser)   
  .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
