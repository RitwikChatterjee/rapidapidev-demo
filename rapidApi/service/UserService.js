'use strict';


/**
 * Create User
 *
 * body User-input  (optional)
 * returns user-output-detailed
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete User
 *
 * userId String 
 * no response value expected for this operation
 **/
exports.deleteUser = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List User
 *
 * returns List
 **/
exports.findUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get User
 *
 * userId String 
 * returns user-output-detailed
 **/
exports.getUser = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "created" : "1967-01-23T17:26:44.767Z",
  "id" : 962,
  "name" : "jane",
  "email" : "jane@mail.com",
  "type" : "primary",
  "primaryUser" : 962,
  "primaryRelation" : "self"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update User
 *
 * userId String 
 * body User-input  (optional)
 * returns user-output-detailed
 **/
exports.updateUser = function(userId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "created" : "2000-04-26T22:57:11.909Z",
  "id" : 4248628,
  "name" : "non ipsum",
  "email" : "ipsum veniam sed et est",
  "type" : "secondary",
  "primaryUser" : -9318517,
  "primaryRelation" : "dolore"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

