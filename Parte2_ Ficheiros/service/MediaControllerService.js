'use strict';
var sql = require('../db.js');

/**
 * Create media
 *
 * body Media  (optional)
 * returns Media
 **/
exports.createMedia = function (body) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query(
      "INSERT INTO Media (name) Values(?)",
      [body.name, body.type],
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        }
        else {
          sql.query(
            "INSERT INTO Media_Type (type_id, media_id) Values(?,?)",
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
      "DELETE FROM Media WHERE media_id = ?",
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
 * returns Media
 **/
exports.retrieveMedia = function (media_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      `SELECT Media.name as Name, Types.name as Type, Characters.name as Characters FROM Media 
      INNER JOIN Media_Type ON Media.media_id = Media_Type.media_id 
      INNER JOIN Types ON Types.type_id = Media_Type.type_id 
      LEFT JOIN Character_Media ON Media.media_id = Character_Media.media_id 
      LEFT JOIN Characters ON Characters.character_id = Character_Media.character_id 
      WHERE Media.media_id = ?`,
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
      `SELECT Media.media_id as Id, Media.name as Name, Types.name as Type FROM Media 
      INNER JOIN Media_Type ON Media.media_id = Media_Type.media_id 
      INNER JOIN Types ON Types.type_id = Media_Type.type_id`,
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
 * body Media 
 * media_id Long 
 * no response value expected for this operation
 **/
exports.updateMedia = function (body, media_id) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query(
      "UPDATE Media set name = ? WHERE media_id = ?",
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

