var createClient = require("flickr-client");
var client;

module.exports = setup;

function setup (options) {
  client = createClient(options);
  return user;
}

function user (name, callback) {
  client('people.findByUsername', { username: name }, function (error, response) {
    if (error) return callback(error);

    callback(undefined, {
      name: response.user.username._content,
      id: response.user.id,
      nsid: response.user.nsid
    });
  });
}
