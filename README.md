angular-detector [![Build Status](https://travis-ci.org/angularifyjs/angular-detector.svg?branch=master)](https://travis-ci.org/angularifyjs/angular-detector) [![Coverage Status](https://img.shields.io/coveralls/angularifyjs/angular-detector.svg)](https://coveralls.io/r/angularifyjs/angular-detector?branch=master)
===============

Detector is a lightweight JavaScript-based User-Agent string parser for Angularjs.


Usage
---------

## Installing

Download the [Production version](https://raw.githubusercontent.com/angularifyjs/bower-angular-detector/master/detector.min.js) or the [Development version](https://raw.githubusercontent.com/angularifyjs/bower-angular-detector/master/detector.js).

Or download it with bower: open terminal and run

```
bower install bower-angular-detector
```

Include js files into your web page:

```html
<script type="text/javascript" src="[...]/detector[.min].js"></script>
```

Add dependency to your app module:

```javascript
angular.module('your-app-name', [
  'angular-detector'
]);
```

The `detector` module is now installed. It exposes the `DetectorProvider` provider and `Detector` factory into your app.


## Using

```javascript
angular.module('app', [
  'angular-detector'

]).config(function(DetectorProvider){
  DetectorProvider.setUA('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.10 Chromium/15.0.874.106 Chrome/15.0.874.106 Safari/535.2');

  var result = DetectorProvider.getResult();

  console.log(result.browser);        // {name: "Chromium", major: "15", version: "15.0.874.106"}
  console.log(result.device);         // {model: undefined, type: undefined, vendor: undefined}
  console.log(result.os);             // {name: "Ubuntu", version: "11.10"}
  console.log(result.os.version);     // "11.10"
  console.log(result.engine.name);    // "WebKit"
  console.log(result.cpu.architecture);   // "amd64"

}).run(function(Detector){
  Detector.setUA('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.10 Chromium/15.0.874.106 Chrome/15.0.874.106 Safari/535.2');

  var result = Detector.getResult();

  console.log(result.browser);        // {name: "Chromium", major: "15", version: "15.0.874.106"}
  console.log(result.device);         // {model: undefined, type: undefined, vendor: undefined}
  console.log(result.os);             // {name: "Ubuntu", version: "11.10"}
  console.log(result.os.version);     // "11.10"
  console.log(result.engine.name);    // "WebKit"
  console.log(result.cpu.architecture);   // "amd64"

  // this will also produce the same result
  /*
  var detector = Detector.newInstance('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.10 Chromium/15.0.874.106 Chrome/15.0.874.106 Safari/535.2');
  var result = detector.getResult();

  console.log(result.browser);        // {name: "Chromium", major: "15", version: "15.0.874.106"}
  console.log(result.device);         // {model: undefined, type: undefined, vendor: undefined}
  console.log(result.os);             // {name: "Ubuntu", version: "11.10"}
  console.log(result.os.version);     // "11.10"
  console.log(result.engine.name);    // "WebKit"
  console.log(result.cpu.architecture);   // "amd64"
  */
  
});
```

## API Reference

**Methods**  
[Detector.getBrowser()](#detectorgetbrowser)  
[Detector.getDevice()](#detectorgetdevice)
[Detector.getEngine()](#detectorgetengine)
[Detector.getOS()](#detectorgetos)
[Detector.getCPU()](#detectorgetcpu)
[Detector.getResult()](#detectorgetresult)
[Detector.getUA()](#detectorgetua)
[Detector.setUA()](#detectorsetua)
[Detector.newInstance(uastring, extension)](#detectornewinstanceuastring-extension)


### Methods

#### Detector.getBrowser()

returns `{ name: '', major: '', version: '' }`

```
# Possible 'browser.name':
Amaya, Arora, Avant, Baidu, Blazer, Bolt, Camino, Chimera, Chrome, Chromium, 
Comodo Dragon, Conkeror, Dillo, Dolphin, Doris, Epiphany, Fennec, Firebird, 
Firefox, Flock, GoBrowser, iCab, ICE Browser, IceApe, IceCat, IceDragon, 
Iceweasel, IE [Mobile], Iron, Jasmine, K-Meleon, Konqueror, Kindle, Links, 
Lunascape, Lynx, Maemo, Maxthon, Midori, Minimo, [Mobile] Safari, Mosaic, Mozilla, 
Netfront, Netscape, NetSurf, Nokia, OmniWeb, Opera [Mini/Mobi/Tablet], Phoenix, 
Polaris, QQBrowser, RockMelt, Silk, Skyfire, SeaMonkey, SlimBrowser, Swiftfox, 
Tizen, UCBrowser, w3m, Yandex

# 'browser.version' & 'browser.major' determined dynamically
```

#### Detector.getDevice()

returns `{ model: '', type: '', vendor: '' }` 

```
# Possible 'device.type':
console, mobile, tablet, smarttv, wearable, embedded

# Possible 'device.vendor':
Acer, Alcatel, Amazon, Apple, Archos, Asus, BenQ, BlackBerry, Dell, GeeksPhone, 
Google, HP, HTC, Huawei, Jolla, Lenovo, LG, Meizu, Microsoft, Motorola, Nexian, 
Nintendo, Nokia, Nvidia, Ouya, Palm, Panasonic, Polytron, RIM, Samsung, Sharp, 
Siemens, Sony-Ericsson, Sprint, Xbox, ZTE

# 'device.model' determined dynamically
```

#### Detector.getEngine()

returns `{ name: '', version: '' }`

```
# Possible 'engine.name'
Amaya, Gecko, iCab, KHTML, Links, Lynx, NetFront, NetSurf, Presto, Tasman, 
Trident, w3m, WebKit

# 'engine.version' determined dynamically
```

#### Detector.getOS()

returns `{ name: '', version: '' }`

```
# Possible 'os.name'
AIX, Amiga OS, Android, Arch, Bada, BeOS, BlackBerry, CentOS, Chromium OS, Contiki,
Fedora, Firefox OS, FreeBSD, Debian, DragonFly, Gentoo, GNU, Haiku, Hurd, iOS, 
Joli, Linpus, Linux, Mac OS, Mageia, Mandriva, MeeGo, Minix, Mint, Morph OS, NetBSD, 
Nintendo, OpenBSD, OpenVMS, OS/2, Palm, PCLinuxOS, Plan9, Playstation, QNX, RedHat, 
RIM Tablet OS, RISC OS, Sailfish, Series40, Slackware, Solaris, SUSE, Symbian, Tizen, 
Ubuntu, UNIX, VectorLinux, WebOS, Windows [Phone/Mobile], Zenwalk

# 'os.version' determined dynamically
```

#### Detector.getCPU()

returns `{ architecture: '' }`

```
# Possible 'cpu.architecture'
68k, amd64, arm, arm64, avr, ia32, ia64, irix, irix64, mips, mips64, pa-risc, 
ppc, sparc, sparc64
```

#### Detector.getResult()

returns `{ ua: '', browser: {}, cpu: {}, device: {}, engine: {}, os: {} }`

#### Detector.getUA()

returns UA string of current instance

#### Detector.setUA()

set & parse UA string

#### Detector.newInstance(uastring, extension)

returns new instance of Detector

For more information about extension, please visit [https://github.com/faisalman/ua-parser-js](https://github.com/faisalman/ua-parser-js)


Documentation
-------------
See [Getting started](https://github.com/angularifyjs/angular-detector/wiki/Getting-started)


Release History
-------------
See [CHANGELOG.md](https://github.com/angularifyjs/angular-detector/blob/master/CHANGELOG.md)


Contributing
-------------
See [CONTRIBUTING.md](https://github.com/angularifyjs/angular-detector/blob/master/CONTRIBUTING.md)


License
-------------
MIT - Copyright (c) 2014 Angularfiy.org & HenryTao.



