angular-closure [![Build Status](https://travis-ci.org/angularifyjs/angular-closure.svg?branch=master)](https://travis-ci.org/angularifyjs/angular-closure) [![Coverage Status](https://img.shields.io/coveralls/angularifyjs/angular-closure.svg)](https://coveralls.io/r/angularifyjs/angular-closure?branch=master)
===============

Bring Class into Javascript with extendable and bindable feature.


Usage
---------

## Installing

Download the [Production version](https://raw.githubusercontent.com/angularifyjs/bower-angular-closure/master/closure.min.js) or the [Development version](https://raw.githubusercontent.com/angularifyjs/bower-angular-closure/master/closure.js).

Or download it with bower: open terminal and run

```
bower install angular-closure
```

Include js files into your web page:

```html
<script type="text/javascript" src="[...]/angular-closure[.min].js"></script>
```

Add dependency to your app module:

```javascript
angular.module('your-app-name', [
  'angular-closure'
]);
```

The `closure` module is now installed. It exposes the `ClosureProvider` provider and `Closure` factory into your app.


## Using

```javascript
angular.module('app', [
  'angular-closure'
]).run(function(Closure, $http){

  ///////////////////////////////////////////////////
  // Create object A
  ///////////////////////////////////////////////////
  A = Closure.extend({
    value: null,
    init: function() {
      this.value = 0;
    },
    get: function() {
      return this.value;
    },
    set: function(value) {
      this.value = value;
    }
  });

  // A.init will be called automatically
  // A.value is equal 0
  // A.get() will return 0
  // if A.set(100) then A.value and A.get() will be equal 100

  ///////////////////////////////////////////////////
  // Extend A object
  ///////////////////////////////////////////////////
  A.extend({
    init: function() {
      this.value = 200;
    },
    get: function() {
      return 'value=' + this._super();
    },
    test: function(){
      return 'hello moto';
    }
  });

  // A.value is equal 200
  // A.get() is equal `value=200`. `this._super` will refer to parent function which return `this.value`
  // A.test() is equal `hello moto`
});
```

**Note:** 
- `this._super()` does not work in `async` because it will be cleared up at the end of the function. You may need to use `var _super = this._super` before call `async`. 
- You can extend many levels as you want. 
- Be careful with `this` object. Take advantage of the best practice below:

```javascript
angular.module('app', [
	'angular-closure'
]).run(function(Closure){

  ///////////////////////////////////////////////////
  // bind `this` object inside callback
  ///////////////////////////////////////////////////
  var B = Closure.extend({
    values: [],
    init: function(){
      angular.forEach([1,2,3,4,5], Closure.bind(function(value){
        this.values.push(value);
      }, this));
    }
  });

  // B.values is equal [1,2,3,4,5]
});
```


Documentation
-------------
See [Getting started](https://github.com/angularifyjs/angular-closure/wiki/Getting-started)


Release History
-------------
See [CHANGELOG.md](https://github.com/angularifyjs/angular-closure/blob/master/CHANGELOG.md)


Contributing
-------------
See [CONTRIBUTING.md](https://github.com/angularifyjs/angular-closure/blob/master/CONTRIBUTING.md)


License
-------------
MIT - Copyright (c) 2014 Angularfiy.org & HenryTao.



