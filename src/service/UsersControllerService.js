'use strict';
var sql = require('../db.js');

/**
 * Create user
 *
 * body USERS  (optional)
 * returns USERS
 **/
exports.createUser = function (body) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query(
      "INSERT INTO USERS (user_name, email, password, nickname) Values(?,?,?,?)",
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
      "DELETE FROM USERS WHERE user_name = ?",
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
 * returns USERS
 **/
exports.retrieveUser = function (user_name) {
  return new Promise(function (resolve, reject) {
    sql.query(
      `SELECT USERS.nickname as nickname, POST.title as Posts, POST.date FROM USERS 
      LEFT JOIN COSPLAY_IN_POST ON USERS.user_name = COSPLAY_IN_POST.user_name 
      LEFT JOIN POST ON POST.post_id = COSPLAY_IN_POST.post_id 
      WHERE USERS.user_name = ?`,
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
      "SELECT USERS.user_name as Username, USERS.nickname as Nickname FROM USERS",
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
 * body USERS 
 * user_name String 
 * no response value expected for this operation
 **/
exports.updateUser = function (body, user_name) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query(
      "UPDATE USERS set password = ?, nickname = ? WHERE user_name = ?",
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

