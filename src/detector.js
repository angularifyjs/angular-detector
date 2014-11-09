/*
 * Dependency: https://github.com/faisalman/ua-parser-js
 */

angular.module('angular-detector', [

]).provider('Detector', function() {
  var parser = new UAParser();
  parser.newInstance = function(uastring, extension){
  	return new UAParser(uastring, extension);
  };
  parser['$get'] = function() {
    return parser;
  };
  return parser;
});