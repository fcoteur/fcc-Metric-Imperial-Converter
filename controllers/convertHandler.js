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
    var indexFirstChar = input.search(/[a-zA-Z]/g);
    console.log(num, num[0].length, indexFirstChar); 
    
    if ((num) && (num[0].length == indexFirstChar)) {result = eval(num[0])}
//    if ((!num) && (num[0].length == indexFirstChar)) {result = 'no number'}
    if ((num) && (num[0].length != indexFirstChar)) {result = false}
    if (typeof result == "undefined") {result = 'no number'}
   console.log(result);
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    let validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    var indexFirstChar = input.search(/[a-zA-Z]/g);
    let unit = input.slice(indexFirstChar, input.length +1);
    let found = validUnits.find((element) => {
        return element == unit;
      }); 
    if (found) {result = unit} else {result=false}
    /*
    // retrieve the valid number from the input string
    var num = input.match(/^\d*(\.\d*|)(\/\d+|\.\d*|)/g);
    // if successfull test the remain of the string against the list of valid units
    if (num) {
      let indexFristLetter = num[0].length;
      let unit = input.slice(indexFristLetter, input.length +1); 
      let found = validUnits.find((element) => {
        return element == unit;
      });
      if (found) {result = unit}
      
    } else {
      result = false;
    }
    */
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit) {
      case 'gal':
        result = 'l';
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
        result = 'lbs';
        break;
      case 'L':
        result = 'gal';
        break;
      case 'l':
        result = 'gal';
        break;
      default:
        result =null;
    };
    return result;
    
    
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit) {
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result='liters';
        break;
      case 'L':
        result='liters';
        break;
      case 'mi':
        result='miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'lbs':
        result='pounds';
        break;
      case 'kg':
        result='kilograms';
        break;
      default:
        result = null;
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
