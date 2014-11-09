/*
 * Dependency: https://github.com/faisalman/ua-parser-js
 */

angular.module('angular-detector', [

]).provider('Detector', function() {
  var parser = new UAParser();
  parser['$get'] = function() {
    return parser;
  };
  return parser;
});