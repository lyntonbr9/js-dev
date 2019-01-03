define('twapi/utils/number', ['exports', 'ember'], function (exports, _ember) {
    'use strict';
  
    exports.isZero = isZero;
    exports.isEqual = isEqual;
    exports.isNumber = isNumber;
    exports.round = round;
  
    var EPS = 1e-9;
  
    exports.EPS = EPS;
  
    var TAU = 2 * Math.PI;
  
    exports.TAU = TAU;
  
    function isZero(num) {
      var eps = arguments.length <= 1 || arguments[1] === undefined ? EPS : arguments[1];
  
      return -eps < num && num < eps;
    }
  
    function isEqual(num1, num2) {
      var eps = arguments.length <= 2 || arguments[2] === undefined ? EPS : arguments[2];
  
      return isZero(num1 - num2, eps);
    }
  
    function isNumber(num) {
      return _ember['default'].isPresent(num) && !isNaN(num);
    }
  
    function round(num) {
      var precision = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
  
      return Number(num).toFixed(precision);
    }
  });