'use strict';
var sql = require('../db.js');

/**
 * Create character
 *
 * body CHARACTERS  (optional)
 * returns CHARACTERS
 **/

exports.createCharacter = function (body) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query(
      "INSERT INTO CHARACTERS (name, description) Values(?,?)",
      [body.name, body.description],
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        }
        else {
          sql.query(
            "INSERT INTO CHARACTER_MEDIA (media_id, character_id) Values(?,?)",
            [body.media, res.insertId],
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
 * Delete character
 *
 * character_id Long 
 * no response value expected for this operation
 **/
exports.deleteCharacter = function (character_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      "DELETE FROM CHARACTERS WHERE character_id = ?",
      [character_id],
      function (err, res) {
        if (err || !res.affectedRows) {
          console.log(err);
          console.log(res);
          reject();
        }
        else {
          console.log(res);
          resolve({ "deleted": character_id });
        }
      }
    )
  });
}


/**
 * Retrieve character
 *
 * character_id Long 
 * returns CHARACTERS
 **/
exports.retrieveCharacter = function (character_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      `SELECT CHARACTERS.name as Name, MEDIA.name as Media, CHARACTERS.description as Description FROM CHARACTERS 
      INNER JOIN CHARACTER_MEDIA ON CHARACTERS.character_id = CHARACTER_MEDIA.character_id 
      INNER JOIN MEDIA ON MEDIA.media_id = CHARACTER_MEDIA.media_id WHERE CHARACTERS.character_id = ?`,
      [character_id],
      function (err, res) {
        if (res.length == 0)
          resolve({ "Error": "Character not found" })
        else {
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
 * Retrieve characters
 *
 * returns List
 **/
exports.retrieveCharacters = function () {
  return new Promise(function (resolve, reject) {
    sql.query(
      `SELECT CHARACTERS.character_id as Id, CHARACTERS.name as Name, MEDIA.name as Media FROM CHARACTERS 
      INNER JOIN CHARACTER_MEDIA ON CHARACTERS.character_id = CHARACTER_MEDIA.character_id 
      INNER JOIN MEDIA ON MEDIA.media_id = CHARACTER_MEDIA.media_id`,
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
 * Update character
 *
 * body CHARACTERS 
 * character_id Long 
 * no response value expected for this operation
 **/
exports.updateCharacter = function (body, character_id) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query(
      "UPDATE CHARACTERS set name = ?, description = ? WHERE character_id = ?",
      [body.name, body.description, character_id],
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res);
          resolve(character_id);
        }
      }
    )
  });
}

