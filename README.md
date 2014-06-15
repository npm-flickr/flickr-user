## flickr-user

Find a Flickr user by username. Unlike Flickr's official API, this module assumes that username is whatever appears in the URL.

e.g: if user's url is flickr.com/azer, its user name is "azer"

## Install

```bash
$ npm install flickr-user
```

## Usage

```js
var client = require('flickr-client')({
  key: 'api-key'
});

var user = require('flickr-user')({
  key: 'api-key'
})

user('azer', function (error, azer) {

  azer.id
  // => 98269877@N00

  azer.name
  // => "azer"

})
```

[flickr-client](http://github.com/npm-flickr/flickr-client) can be passed to avoid repeating auth options:

```js
var client = require('flickr-client')({
  key: 'api-key'
});

var user = require('flickr-user')(client)
```
