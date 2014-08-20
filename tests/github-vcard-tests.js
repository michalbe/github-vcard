'use strict';

var assert = require('assert');
var nock = require('nock');

var githubVcard = require('../');

// test 1
var json = JSON.stringify([{
  'actor_attributes':
    {
      'login':'michalbe',
      'type':'User',
      'gravatar_id':'c9c16dd1d16ffef177b5e5ce0e50000d',
      'name':'Michał Budzyński',
      'company':'Mozilla',
      'blog':'http://michalbe.blogspot.com',
      'location':'Warsaw, Poland',
      'email':''
    }
  }]);

nock('https://github.com')
  .get('/michalbe.json')
  .reply(200, json);

githubVcard('michalbe', function(err, data) {
  assert.equal(data.location, 'Warsaw, Poland');
});
