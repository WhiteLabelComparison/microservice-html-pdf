'use strict';

var pdf = require('html-pdf');
var fs = require('fs');
var path = require('path');

exports.convertPOST = function(args, res, next) {
  var fileName = args.body.value.filename;

  pdf.create(args.body.value.html, {
      format: args.body.value.format !== undefined ? args.body.value.format : "A4",
      orientation: args.body.value.orientation !== undefined ? args.body.value.orientation : "portrait"
  }).toFile("/usr/src/app/files/" + fileName, function(err, pdfRes){
      if (err) {
          console.log(err);
          res.writeHead(404, { "Content-Type": "application/json"});
          res.end({success: false, message: err});
      }

      var fileStream = fs.createReadStream(pdfRes.filename);
      fileStream.on('error', function (error) {
          res.writeHead(404, { "Content-Type": "application/json"});
          res.end({success: false, message: error});
      });
      fileStream.on('open', function() {
          res.writeHead(200, {
              'Content-Type': 'application/pdf',
              'Content-Disposition': 'attachment; filename="' + args.body.value.filename + '"'
          });
      });
      fileStream.pipe(res);
  });

}

