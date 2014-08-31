angular-closure [![Build Status](https://travis-ci.org/angularifyjs/angular-closure.svg?branch=master)](https://travis-ci.org/angularifyjs/angular-closure) [![Coverage Status](https://img.shields.io/coveralls/angularifyjs/angular-closure.svg)](https://coveralls.io/r/angularifyjs/angular-closure?branch=master)
===============

Bring Class into Javascript with extendable and bindable feature.


Usage
---------
### Installing
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


### Using

Create object A

```javascript
angular.module('app', [
  'angular-closure'
]).run(function(){
 	
});
```


Documentation
-------------
- [Getting started](https://github.com/ncuillery/angular-breadcrumb/wiki/Getting-started)
- [API Reference](https://github.com/ncuillery/angular-breadcrumb/wiki/API-Reference)


Release History
-------------
See [CHANGELOG.md](https://github.com/ncuillery/angular-breadcrumb/blob/master/CHANGELOG.md)


Contributing
-------------
See [CONTRIBUTING.md](https://github.com/ncuillery/angular-breadcrumb/blob/master/CONTRIBUTING.md)


License
-------------
Copyright (c) 2014 Angularfiy.org & HenryTao.



