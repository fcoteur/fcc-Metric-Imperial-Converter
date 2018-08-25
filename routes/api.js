/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var output;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = Math.round(convertHandler.convert(initNum, initUnit) * 100000) / 100000;
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      if ((returnUnit) && (!initNum)) output = 'invalid number';
      if ((!returnUnit) && (initNum)) output = 'invalid unit'; 
      if ((!returnUnit) && (!initNum)) output = 'invalid number and unit';
      if ((returnUnit) && (initNum)) output = {initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString};
      if (initNum == 'no number') output = 'no number';
      res.json(output); 

    });
    
};
