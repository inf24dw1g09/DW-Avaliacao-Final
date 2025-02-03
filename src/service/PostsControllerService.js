'use strict';
var sql = require('../db.js');

/**
 * Create post
 *
 * body Posts  (optional)
 * returns Posts
 **/
exports.createPost = function (body) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    let date = new Date();
    sql.query(
      "INSERT INTO Post (title, photographer, description, date) Values(?,?,?,?)",
      [body.title, body.photographer, body.message, date],
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        }
        else {
          console.log(res);
          for (let i = 0; i < body.characters.length; ++i) {
            sql.query(
              "INSERT INTO Cosplay_in_Post (post_id, user_name, character_id) Values(?,?,?)",
              [res.insertId, body.cosplayers[i], body.characters[i]],
              function (err2, res2) {
                if (err2) {
                  console.log(err2);
                  reject(err2);
                }
                }
              )
          }
          let object = {
            "Title": body.title,
            "Date": date,
            "Cosplayers": body.cosplayers,
            "Characters": body.characters,
            "Photographer": body.photographer,
            "Description": body.message
          }
          resolve(object);
        }
      }
    )
  });
}

/**
 * Delete post
 *
 * post_id Long 
 * no response value expected for this operation
 **/
exports.deletePost = function (post_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      "DELETE FROM Post WHERE post_id = ?",
      [post_id],
      function (err, res) {
        if (err || !res.affectedRows) {
          console.log(err);
          console.log(res);
          reject();
        }
        else {
          console.log(res);
          resolve({ "deleted": post_id });
        }
      }
    )
  });
}

/**
 * Retrieve post
 *
 * post_id Long 
 * returns Posts
 **/
exports.retrievePost = function (post_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      `SELECT Post.title as Title, Post.date as Date, Users.nickname as Cosplayers, Characters.name as Characters, Post.photographer 
      as Photographer, Post.description as Description, Comment.comment_id, Comment.user_name as CommentUser, Comment.message 
      as Comments, Comment.date as CommentDate FROM Post 
      INNER JOIN Cosplay_in_Post ON Post.post_id = Cosplay_in_Post.post_id 
      INNER JOIN Users ON Users.user_name = Cosplay_in_Post.user_name 
      INNER JOIN Characters ON Characters.character_id = Cosplay_in_Post.character_id 
      LEFT JOIN Comment ON Comment.post_id = Post.post_id WHERE Post.post_id = ?`,
      [post_id],
      function (err, res) {
        if (res.length == 0)
          resolve({ "Error": "Post not found" })
        else {
          if (err) {
            console.log(err);
            reject(err);
          }
          else {
            console.log(res);
            let object = {
              "Title": res[0]["Title"],
              "Date": res[0]["Date"],
              "Cosplayers": [],
              "Photographer": res[0]["Photographer"],
              "Description": res[0]["Description"],
              "Comments": []
            }
            let copyCosplays = []
            let copyComments = []
            res.forEach(
              el => {
                if (!copyCosplays.includes(el["Cosplayers"])) {
                  copyCosplays.push(el["Cosplayers"])
                  object["Cosplayers"].push({
                    "Cosplayer": el["Cosplayers"],
                    "Character": el["Characters"]
                  })
                }
                if (!copyComments.includes(el["Comments"])) {
                  copyComments.push(el["Comments"])
                  object["Comments"].push({
                    "User": el["CommentUser"],
                    "Comment": el["Comments"],
                    "Date": el["CommentDate"]
                  })
                }
              })
            resolve(object);
          }
        }
      }
    )
  });
}


/**
 * Retrieve posts
 *
 * returns List
 **/
exports.retrievePosts = function () {
  return new Promise(function (resolve, reject) {
    sql.query(
      "SELECT Post.post_id as Id, Post.title as Title, Post.date as Date FROM Post",
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
 * Update post
 *
 * body Posts 
 * post_id Long 
 * no response value expected for this operation
 **/
exports.updatePost = function (body, post_id) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query(
      "UPDATE Post set title = ?, description=? WHERE post_id = ?",
      [body.title, body.message, post_id],
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res);
          resolve(post_id);
        }
      }
    )
  });
}

