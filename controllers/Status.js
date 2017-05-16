'use strict';

var url = require('url');


var Status = require('./StatusService');


module.exports.statusGET = function statusGET (req, res, next) {
  Status.statusGET(req.swagger.params, res, next);
};
