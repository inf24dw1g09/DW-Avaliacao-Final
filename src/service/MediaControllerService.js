'use strict';
var sql = require('../db.js');

/**
 * Create media
 *
 * body MEDIA  (optional)
 * returns MEDIA
 **/
exports.createMedia = function (body) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query(
      "INSERT INTO MEDIA (name) Values(?)",
      [body.name, body.type],
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        }
        else {
          sql.query(
            "INSERT INTO MEDIA_TYPE (type_id, media_id) Values(?,?)",
            [body.type, res.insertId],
            function (err, res) {
              if (err) {
                console.log(err);
                reject(err);
              }
            }
          )
          console.log(res.insertId);
          resolve(res.insertId);
        }
      }
    )
  });
}


/**
 * Delete media
 *
 * media_id Long 
 * no response value expected for this operation
 **/
exports.deleteMedia = function (media_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      "DELETE FROM MEDIA WHERE media_id = ?",
      [media_id],
      function (err, res) {
        if (err || !res.affectedRows) {
          console.log(err);
          console.log(res);
          reject();
        }
        else {
          console.log(res);
          resolve({ "deleted": media_id });
        }
      }
    )
  });
}


/**
 * Retrieve media
 *
 * media_id Long 
 * returns MEDIA
 **/
exports.retrieveMedia = function (media_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      `SELECT MEDIA.name as Name, TYPES.name as Type, CHARACTERS.name as Characters FROM MEDIA 
      INNER JOIN MEDIA_TYPE ON MEDIA.media_id = MEDIA_TYPE.media_id 
      INNER JOIN TYPES ON TYPES.type_id = MEDIA_TYPE.type_id 
      LEFT JOIN CHARACTER_MEDIA ON MEDIA.media_id = CHARACTER_MEDIA.media_id 
      LEFT JOIN CHARACTERS ON CHARACTERS.character_id = CHARACTER_MEDIA.character_id 
      WHERE MEDIA.media_id = ?`,
      [media_id],
      function (err, res) {
        if (res.length == 0)
          resolve({ "Error": "Media not found" })
        else {
          if (err) {
            console.log(err);
            reject(err);
          }
          else {
            console.log(res);
            let object = {
              "Name": res[0]["Name"],
              "Type": res[0]["Type"],
              "Characters": []
            }
            res.forEach(
              el => {
                object["Characters"].push(el["Characters"])
              })
            resolve(object);
          }
        }
      }
    )
  });
}


/**
 * Retrieve media
 *
 * returns List
 **/
exports.retrieveMedias = function () {
  return new Promise(function (resolve, reject) {
    sql.query(
      `SELECT MEDIA.media_id as Id, MEDIA.name as Name, TYPES.name as Type FROM MEDIA 
      INNER JOIN MEDIA_TYPE ON MEDIA.media_id = MEDIA_TYPE.media_id 
      INNER JOIN TYPES ON TYPES.type_id = MEDIA_TYPE.type_id`,
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
 * Update media
 *
 * body MEDIA 
 * media_id Long 
 * no response value expected for this operation
 **/
exports.updateMedia = function (body, media_id) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query(
      "UPDATE MEDIA set name = ? WHERE media_id = ?",
      [body.name, media_id],
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res);
          resolve(media_id);
        }
      }
    )
  });
}

