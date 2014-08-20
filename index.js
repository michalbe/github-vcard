'use strict';

var request = require('request');

var gv = function(username, callback) {
  request('https://github.com/' + username + '.json', function(err, req, body) {
    body = JSON.parse(body);
    var actor = body[0].actor_attributes;
    var vcard = {
      email: actor.email,
      name: actor.name,
      location: actor.location,
      company: actor.company,
      url: actor.blog
    }
    callback(err, vcard);
  });
};

module.exports = gv;
