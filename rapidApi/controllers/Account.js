'use strict';

var utils = require('../utils/writer.js');
var Account = require('../service/AccountService');

module.exports.createAccount = function createAccount (req, res, next) {
  var body = req.swagger.params['body'].value;
  Account.createAccount(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAccount = function deleteAccount (req, res, next) {
  var accountId = req.swagger.params['accountId'].value;
  Account.deleteAccount(accountId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findAccounts = function findAccounts (req, res, next) {
  Account.findAccounts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAccount = function getAccount (req, res, next) {
  var accountId = req.swagger.params['accountId'].value;
  Account.getAccount(accountId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAccount = function updateAccount (req, res, next) {
  var accountId = req.swagger.params['accountId'].value;
  var body = req.swagger.params['body'].value;
  Account.updateAccount(accountId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
