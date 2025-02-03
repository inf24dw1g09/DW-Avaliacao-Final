'use strict';
var sql = require('../db.js');

/**
 * Create character
 *
 * body Characters  (optional)
 * returns Characters
 **/

exports.createCharacter = function (body) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query(
      "INSERT INTO Characters (name, description) Values(?,?)",
      [body.name, body.description],
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        }
        else {
          sql.query(
            "INSERT INTO Character_Media (media_id, character_id) Values(?,?)",
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
      "DELETE FROM Characters WHERE character_id = ?",
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
 * returns Characters
 **/
exports.retrieveCharacter = function (character_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      `SELECT Characters.name as Name, Media.name as Media, Characters.description as Description FROM Characters 
      INNER JOIN Character_Media ON Characters.character_id = Character_Media.character_id 
      INNER JOIN Media ON Media.media_id = Character_Media.media_id WHERE Characters.character_id = ?`,
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
      `SELECT Characters.character_id as Id, Characters.name as Name, Media.name as Media FROM Characters 
      INNER JOIN Character_Media ON Characters.character_id = Character_Media.character_id 
      INNER JOIN Media ON Media.media_id = Character_Media.media_id`,
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
 * body Characters 
 * character_id Long 
 * no response value expected for this operation
 **/
exports.updateCharacter = function (body, character_id) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query(
      "UPDATE Characters set name = ?, description = ? WHERE character_id = ?",
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

