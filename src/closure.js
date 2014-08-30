angular.module('angular-closure', [

]).provider('Closure', function() {
  var closure = {
    extend: function(obj) {
    	// verify obj
      obj = angular.extend({}, obj);
      
      // wrapper function
      angular.forEach(obj, function(value, key) {
        if (angular.isFunction(value)) {
          obj[key] = function() {
            return value.apply(obj, arguments);
          };
        }
      });

      // check init function to return public attributes and methods
      if (angular.isFunction(obj.init)) {
        obj.init();
      }
      
      // extend
      obj.extend = function(extObj) {
        angular.forEach(extObj, function(value, key) {
          if (!obj[key]) {
            obj[key] = (function(value) {
              return function() {
                return value.apply(obj, arguments)
              };
            }(value));
          } else {
            obj[key] = (function(newValue, oldValue) {
              return function() {
                obj._super = oldValue;
                var res = newValue.apply(obj, arguments);
                obj._super = null;
                return res;
              };
            }(value, obj[key]));
          }
        });

        // check init function to return public attributes and methods
        if (angular.isFunction(obj.init)) {
          obj.init();
        }
        return obj;
      };

      // return obj
      return obj;
    },

    bind: function(func, obj) {
      return function() {
        return func.apply(obj, arguments);
      }
    },

    $get: function() {
      return closure;
    }

  };

  return closure;

});
