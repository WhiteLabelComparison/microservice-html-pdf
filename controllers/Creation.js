'use strict';

var url = require('url');


var Creation = require('./CreationService');


module.exports.convertPOST = function convertPOST (req, res, next) {
  Creation.convertPOST(req.swagger.params, res, next);
};
