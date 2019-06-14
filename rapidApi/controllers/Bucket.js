'use strict';

var utils = require('../utils/writer.js');
var Bucket = require('../service/BucketService');

module.exports.createBucket = function createBucket (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var body = req.swagger.params['body'].value;
  Bucket.createBucket(userId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBucket = function deleteBucket (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var bucketId = req.swagger.params['bucketId'].value;
  Bucket.deleteBucket(userId,bucketId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findBuckets = function findBuckets (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  Bucket.findBuckets(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBucket = function getBucket (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var bucketId = req.swagger.params['bucketId'].value;
  Bucket.getBucket(userId,bucketId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBucket = function updateBucket (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var bucketId = req.swagger.params['bucketId'].value;
  var body = req.swagger.params['body'].value;
  Bucket.updateBucket(userId,bucketId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
