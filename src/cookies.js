/*
 * Dependency: https://github.com/ScottHamper/Cookies
 */

angular.module('angular-cookies', [

]).provider('Cookies', function() {
  var cookies = window.Cookies || {};
  cookies['$get'] = function() {
    return cookies;
  };
  return cookies;
});