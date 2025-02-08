'use strict';
var sql = require('../db.js');

/**
 * Create comment
 *
 * body Comments  (optional)
 * returns Comments
 **/
exports.createComment = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query(
      "INSERT INTO COMMENT (post_id, user_name, message, date) Values(?,?,?,?)", 
      [body.post, body.user, body.message, new Date()], 
      function(err,res){
        if (err) {
          console.log(err);
          reject(err);
        } 
        else {
          console.log(res.insertId);
          resolve({
            "post_id": body.post,
            "user": body.user,
            "message": body.message,
            "date": new Date()
          });
        }
      }
    )
  });
}


/**
 * Delete comment
 *
 * comment_id Long 
 * no response value expected for this operation
 **/
exports.deleteComment = function(comment_id) {
  return new Promise(function(resolve, reject) {
    sql.query(
      "DELETE FROM COMMENT WHERE comment_id = ?", 
      [comment_id], 
      function(err,res){
        if (err || !res.affectedRows) {
          console.log(err);
          console.log(res);
          reject();
        } 
        else {
          console.log(res);
          resolve({"deleted":comment_id});
        }
      }
    )
  });
}


/**
 * Retrieve comment
 *
 * comment_id Long 
 * returns Comments
 **/
exports.retrieveComment = function(comment_id) {
  return new Promise(function(resolve, reject) {
    sql.query(
      `SELECT POST.title as Post, COMMENT.user_name as User, COMMENT.message as Comment, COMMENT.date as Date 
      FROM COMMENT INNER JOIN POST ON POST.post_id = COMMENT.post_id WHERE COMMENT.comment_id = ?`, 
      [comment_id], 
      function(err,res){
        if (res.length == 0)
          resolve({"Error": "Comment not found"})
        else{
          if (err) {
            console.log(err);
            reject(err);
          } 
          else {
            console.log(res);
            resolve(res[0]);
          }
        }
      }
    )
  });
}


/**
 * Retrieve comments
 *
 * returns List
 **/
exports.retrieveComments = function() {
  return new Promise(function(resolve, reject) {
    sql.query(
      `SELECT COMMENT.comment_id as Id, POST.title as Post, COMMENT.message as Comment, COMMENT.date as Date FROM COMMENT
      INNER JOIN POST ON POST.post_id = COMMENT.post_id`, 
      function(err,res){
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
 * Update comment
 *
 * body Comments 
 * comment_id Long 
 * no response value expected for this operation
 **/
exports.updateComment = function(body,comment_id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query(
      "UPDATE COMMENT set message = ? WHERE comment_id = ?", 
      [body.message, comment_id], 
      function(err,res){
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res);
          resolve(comment_id);
        }
      }
    )
  });
}

