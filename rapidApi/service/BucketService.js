'use strict';


/**
 * Create Bucket
 *
 * userId String 
 * body Bucket-input  (optional)
 * returns bucket-output-detailed
 **/
exports.createBucket = function(userId,body) {
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
 * Delete Bucket
 *
 * userId String 
 * bucketId String 
 * no response value expected for this operation
 **/
exports.deleteBucket = function(userId,bucketId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List Bucket
 *
 * userId String 
 * returns List
 **/
exports.findBuckets = function(userId) {
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
 * Get Bucket
 *
 * userId String 
 * bucketId String 
 * returns bucket-output-detailed
 **/
exports.getBucket = function(userId,bucketId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bucketId" : 29802364,
  "balances" : {
    "available" : -47121.43,
    "total" : 11865.03
  },
  "name" : "personal",
  "currency" : "USD",
  "description" : "Personal expenses"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Bucket
 *
 * userId String 
 * bucketId String 
 * body Bucket-input  (optional)
 * returns bucket-output-detailed
 **/
exports.updateBucket = function(userId,bucketId,body) {
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

