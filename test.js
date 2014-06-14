require('with-env')();

var test = require("prova");
var user = require("./")({
  key: process.env.FLICKR_API_KEY
});

test('getting a user', function (t) {
  user('azer', function (error, azer) {
    t.plan(4);
    t.error(error);
    t.equal(azer.name, 'azer');
    t.equal(azer.id, '13517180@N00');
    t.equal(azer.nsid, '13517180@N00');
  });
});
