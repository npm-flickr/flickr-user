var createClient = require("flickr-client");
var client;

module.exports = setup;

function setup (options) {
  client = createClient(options);
  return user;
}

function user (name, callback) {
  client('urls.lookupUser', { url: 'http://flickr.com/photos/' + name }, function (error, response) {
    if (error) return callback(error);

    callback(undefined, {
      name: name,
      id: response.user.id
    });
  });
}
