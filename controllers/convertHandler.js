/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;   
    var num = input.match(/^\d*(\.\d*|)(\/\d+|\.\d*|)/g);
    if (num) {
      result = eval(num[0]);
    } else { 
      result = false;
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var num = input.match(/^\d*(\.\d*|)(\/\d+|\.\d*|)/g);
    if (num) {
      var indexFristLetter = num[0].length;
      result = input.slice(indexFristLetter, input.length +1);  
    } else {
      result = false;
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit) {
      case 'gal':
        result = 'L';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'kg':
        result = 'mi';
        break;
      case 'L':
        result = 'gal';
        break;
      default:
    };
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit) {
      case 'gal':
        result = 'gallons';
        break;
      case 'lbs':
        result='pound';
        break;
      case 'mi':
        result='miles';
        break;
      case 'L':
        result='liters';
        break;
      case 'kg':
        result='kilograms';
        break;
      case 'km':
        result = 'kilometers';
        break;
      default:
    };
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;    
    switch (initUnit) {
      case 'L':
        result = initNum / galToL;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
        
      default:
    };
        
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
