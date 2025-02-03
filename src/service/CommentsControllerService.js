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
      "INSERT INTO Comment (post_id, user_name, message, date) Values(?,?,?,?)", 
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
      "DELETE FROM Comment WHERE comment_id = ?", 
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
      `SELECT Post.title as Post, Comment.user_name as User, Comment.message as Comment, Comment.date as Date 
      FROM Comment INNER JOIN Post ON Post.post_id = Comment.post_id WHERE Comment.comment_id = ?`, 
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
      `SELECT Comment.comment_id as Id, Post.title as Post, Comment.message as Comment, Comment.date as Date FROM Comment
      INNER JOIN Post ON Post.post_id = Comment.post_id`, 
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
      "UPDATE Comment set message = ? WHERE comment_id = ?", 
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

