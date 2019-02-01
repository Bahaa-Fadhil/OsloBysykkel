# OsloBysykkel
Application task is to display all available bikes and locks on each satations!



### Getting Started

First, you must register at https://developer.oslobysykkel.no/ . Follow the instructions on the page to get a clientId.

If you want to test the project clone project or download and run it on any local server.
Add your client ID where you find brackets with ['Your API ClientKey']

```javascript
$(document).ready(function () {
  var ClientKey = ['Your API ClientKey'];
  var URL = 'https://oslobysykkel.no/api/v1/stations/availability';
  var options = {
        json: true,
        headers: { 'Client-Identifier' : ClientKey }
  }

```

### Git
* [https://github.com/Bahaa-Fadhil/OsloBysykkel](https://github.com/Bahaa-Fadhil/OsloBysykkel)


### Data Sources
* https://oslobysykkel.no/api/v1/stations
* https://oslobysykkel.no/api/v1/stations/availability


### Author
Bahaa Al-Bayati <<www.bahaa.no>>


### Changelog
* 1.0.0 Application version
* 1.2.6 Stable version for 2016 API
* 2.0.0 Implemented clientId required in 2017 API

