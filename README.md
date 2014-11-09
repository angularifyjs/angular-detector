angular-cookies [![Build Status](https://travis-ci.org/angularifyjs/angular-cookies.svg?branch=master)](https://travis-ci.org/angularifyjs/angular-cookies) [![Coverage Status](https://img.shields.io/coveralls/angularifyjs/angular-cookies.svg)](https://coveralls.io/r/angularifyjs/angular-cookies?branch=master)
===============

Cookies is a small client-side javascript library that makes managing cookies easily and integrate with AngularJS.


Usage
---------

## Installing

Download the [Production version](https://raw.githubusercontent.com/angularifyjs/bower-angular-cookies/master/cookies.min.js) or the [Development version](https://raw.githubusercontent.com/angularifyjs/bower-angular-cookies/master/cookies.js).

Or download it with bower: open terminal and run

```
bower install angular-cookies
```

Include js files into your web page:

```html
<script type="text/javascript" src="[...]/cookies[.min].js"></script>
```

Add dependency to your app module:

```javascript
angular.module('your-app-name', [
  'angular-cookies'
]);
```

The `cookies` module is now installed. It exposes the `CookiesProvider` provider and `Cookies` factory into your app.


## Using

```javascript
angular.module('app', [
  'angular-cookies'

]).config(function(CookiesProvider){
  CookiesProvider.set('hello', 'moto', {
    domain: 'www.example.com',
    expires: 600,
    secure: true
  });

}).run(function(Cookies, $http){
  Cookies.set('hello', 'moto', {
    domain: 'www.example.com',
    expires: 600,
    secure: true
  });
  
});
```

## API Reference

**Methods**  
[Cookies.set(key, value [, options])](#cookiessetkey-value--options)  
[Cookies.get(key)](#cookiesgetkey)  
[Cookies.expire(key [, options])](#cookiesexpirekey--options)

**Properties**  
[Cookies.enabled](#cookiesenabled)  
[Cookies.defaults](#cookiesdefaults)

### Methods

#### Cookies.set(key, value [, options])
*Alias: Cookies(key, value [, options])*

Sets a cookie in the document. If the cookie does not already exist, it will be created. Returns the `Cookies` object.

| Option    | Description                                                                                      | Default     |
| --------: | ------------------------------------------------------------------------------------------------ | ----------- |
|    *path* | A string value of the path of the cookie                                                         | `"/"`       |
|  *domain* | A string value of the domain of the cookie                                                       | `undefined` |
| *expires* | A number (of seconds), a date parsable string, or a `Date` object of when the cookie will expire | `undefined` |
|  *secure* | A boolean value of whether or not the cookie should only be available over SSL                   | `false`     |

A default value for any option may be set in the `Cookies.defaults` object.

**Example Usage**
```javascript
// Setting a cookie value
Cookies.set('key', 'value');

// Chaining sets together
Cookies.set('key', 'value').set('hello', 'world');

// Setting cookies with additional options
Cookies.set('key', 'value', { domain: 'www.example.com', secure: true });

// Setting cookies with expiration values
Cookies.set('key', 'value', { expires: 600 }); // Expires in 10 minutes
Cookies.set('key', 'value', { expires: '01/01/2012' });
Cookies.set('key', 'value', { expires: new Date(2012, 0, 1) });

// Using the alias
Cookies('key', 'value', { secure: true });
```

#### Cookies.get(key)
*Alias: Cookies(key)*

Returns the value of the most locally scoped cookie with the specified key.

**Example Usage**
```javascript
// First set a cookie
Cookies.set('key', 'value');

// Get the cookie value
Cookies.get('key'); // "value"

// Using the alias
Cookies('key'); // "value"
```
    
#### Cookies.expire(key [, options])
*Alias: Cookies(key, `undefined` [, options])*

Expires a cookie, removing it from the document. Returns the `Cookies` object.

| Option    | Description                                                                                      | Default     |
| --------: | ------------------------------------------------------------------------------------------------ | ----------- |
|    *path* | A string value of the path of the cookie                                                         | `"/"`       |
|  *domain* | A string value of the domain of the cookie                                                       | `undefined` |

A default value for any option may be set in the `Cookies.defaults` object.

**Example Usage**
```javascript
// First set a cookie and get its value
Cookies.set('key', 'value').get('key'); // "value"

// Expire the cookie and try to get its value
Cookies.expire('key').get('key'); // undefined

// Using the alias
Cookies('key', undefined);
```
    

### Properties

#### Cookies.enabled
A boolean value of whether or not the browser has cookies enabled.

**Example Usage**
```javascript
if (Cookies.enabled) {
    Cookies.set('key', 'value');
}
```

#### Cookies.defaults
An object representing default options to be used when setting and expiring cookie values.

| Option    | Description                                                                                      | Default     |
| --------: | ------------------------------------------------------------------------------------------------ | ----------- |
|    *path* | A string value of the path of the cookie                                                         | `"/"`       |
|  *domain* | A string value of the domain of the cookie                                                       | `undefined` |
| *expires* | A number (of seconds), a date parsable string, or a `Date` object of when the cookie will expire | `undefined` |
|  *secure* | A boolean value of whether or not the cookie should only be available over SSL                   | `false`     |

**Example Usage**
```javascript
Cookies.defaults = {
    path: '/',
    secure: true
};

Cookies.set('key', 'value'); // Will be secure and have a path of '/'
Cookies.expire('key'); // Will expire the cookie with a path of '/'
```


Documentation
-------------
See [Getting started](https://github.com/angularifyjs/angular-cookies/wiki/Getting-started)


Release History
-------------
See [CHANGELOG.md](https://github.com/angularifyjs/angular-cookies/blob/master/CHANGELOG.md)


Contributing
-------------
See [CONTRIBUTING.md](https://github.com/angularifyjs/angular-cookies/blob/master/CONTRIBUTING.md)


License
-------------
MIT - Copyright (c) 2014 Angularfiy.org & HenryTao.



