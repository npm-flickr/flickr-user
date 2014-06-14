## flickr-user

Find a Flickr user by username

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
  // => 13517180@N00

  azer.nsid
  // => 13517180@N00

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
