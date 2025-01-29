'use strict';
var sql = require('../db.js');

/**
 * Create user
 *
 * body Users  (optional)
 * returns Users
 **/
exports.createUser = function (body) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query(
      "INSERT INTO Users (user_name, email, password, nickname) Values(?,?,?,?)",
      [body.user_name, body.email, body.password, body.nickname],
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        }
        else {
          console.log(res);
          resolve({
            "user_name": body.user_name,
            "email": body.email,
            "password": body.password,
            "nickname": body.nickname
          }
          );
        }
      })
  });
}

/**
 * Delete user
 *
 * user_name String 
 * no response value expected for this operation
 **/
exports.deleteUser = function (user_name) {
  return new Promise(function (resolve, reject) {
    sql.query(
      "DELETE FROM Users WHERE user_name = ?",
      [user_name],
      function (err, res) {
        if (err || !res.affectedRows) {
          console.log(err);
          console.log(res);
          reject();
        }
        else {
          console.log(res);
          resolve({ "deleted": user_name });
        }
      }
    )
  });
}

/**
 * Retrieve user
 *
 * user_name String 
 * returns Users
 **/
exports.retrieveUser = function (user_name) {
  return new Promise(function (resolve, reject) {
    sql.query(
      `SELECT Users.nickname as nickname, Post.title as Posts, Post.date FROM Users 
      LEFT JOIN Cosplay_in_Post ON Users.user_name = Cosplay_in_Post.user_name 
      LEFT JOIN Post ON Post.post_id = Cosplay_in_Post.post_id 
      WHERE Users.user_name = ?`,
      [user_name],
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        }
        else {
          console.log(res);
          if (res.length == 0)
            resolve({ "Error": "User not found" })
          else {
            let object = {
              "User": user_name,
              "Nickname": res[0]["nickname"],
              "Posts": []
            }
            res.forEach(el => object["Posts"].push({
              "Title": el["Posts"],
              "Date": el["date"]
            }))
            resolve(object);
          }
        }
      }
    )
  });
}

/**
 * Retrieve users
 *
 * returns List
 **/
exports.retrieveUsers = function () {
  return new Promise(function (resolve, reject) {
    sql.query(
      "SELECT Users.user_name as Username, Users.nickname as Nickname FROM Users",
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res);
          resolve(res);
        }
      }
    )
  });
}

/**
 * Update user
 *
 * body Users 
 * user_name String 
 * no response value expected for this operation
 **/
exports.updateUser = function (body, user_name) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query(
      "UPDATE Users set password = ?, nickname = ? WHERE user_name = ?",
      [body.password, body.nickname, user_name],
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res);
          resolve(user_name);
        }
      }
    )
  });
}

