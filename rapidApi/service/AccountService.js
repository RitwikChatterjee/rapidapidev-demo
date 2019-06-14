'use strict';


/**
 * Create Account
 *
 * body Account-input  (optional)
 * returns account-output-detailed
 **/
exports.createAccount = function(body) {
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
 * Delete Account
 *
 * accountId String 
 * no response value expected for this operation
 **/
exports.deleteAccount = function(accountId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List Account
 *
 * returns List
 **/
exports.findAccounts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "accId" : 62593971,
  "created" : "1981-09-08T10:37:23.335Z",
  "type" : "rd",
  "number" : "est",
  "finInstitution" : "in est nulla ut",
  "owners" : [ "Lorem quis anim eu ", "id", "veni", "non Lorem", "adipisicing sit" ],
  "currency" : "dolor dolor ut enim",
  "openDate" : "2017-04-03",
  "maturityDate" : "2000-06-21",
  "status" : "active"
}, {
  "accId" : -77516048,
  "created" : "2018-10-14T07:53:06.524Z",
  "type" : "savings",
  "number" : "dolor Duis enim",
  "finInstitution" : "in ut officia",
  "owners" : [ "occaecat ad nostrud nulla officia", "reprehenderit ut nulla" ],
  "currency" : "voluptate quis",
  "openDate" : "1968-12-26",
  "maturityDate" : "1946-06-17",
  "status" : "active"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Account
 *
 * accountId String 
 * returns account-output-detailed
 **/
exports.getAccount = function(accountId) {
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
 * Update Account
 *
 * accountId String 
 * body Account-input  (optional)
 * returns account-output-detailed
 **/
exports.updateAccount = function(accountId,body) {
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

