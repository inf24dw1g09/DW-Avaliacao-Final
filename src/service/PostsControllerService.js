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
      "INSERT INTO POST (title, photographer, description, date) Values(?,?,?,?)",
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
              "INSERT INTO COSPLAY_IN_POST (post_id, user_name, character_id) Values(?,?,?)",
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
      "DELETE FROM POST WHERE post_id = ?",
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
      `SELECT POST.title as Title, POST.date as Date, USERS.nickname as Cosplayers, CHARACTERS.name as Characters, POST.photographer 
      as Photographer, POST.description as Description, COMMENT.comment_id, COMMENT.user_name as CommentUser, COMMENT.message 
      as Comments, COMMENT.date as CommentDate FROM POST 
      INNER JOIN COSPLAY_IN_POST ON POST.post_id = COSPLAY_IN_POST.post_id 
      INNER JOIN USERS ON USERS.user_name = COSPLAY_IN_POST.user_name 
      INNER JOIN CHARACTERS ON CHARACTERS.character_id = COSPLAY_IN_POST.character_id 
      LEFT JOIN COMMENT ON COMMENT.post_id = POST.post_id WHERE POST.post_id = ?`,
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
      "SELECT POST.post_id as Id, POST.title as Title, POST.date as Date FROM POST",
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
      "UPDATE POST set title = ?, description=? WHERE post_id = ?",
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

