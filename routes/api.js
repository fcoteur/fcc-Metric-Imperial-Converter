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
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = Math.round(convertHandler.convert(initNum, initUnit) * 100000) / 100000;
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      if ((returnUnit) && (!initNum)) res.json('invalid number'); //checked!
      if ((!returnUnit) && (initNum)) res.json('invalid unit'); 
      if ((!returnUnit) && (!initNum)) res.json('invalid number and unit');
      if ((returnUnit) && (initNum)) res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString});
      
    });
    
};
