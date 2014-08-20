'use strict';

var assert = require('assert');
var nock = require('nock');

var githubVcard = require('../');

// test 1
var html =
  '<div class="vcard-fullname" itemprop="name">Michał Budzyński</div>' +
  '<li class="vcard-detail" itemprop="worksFor">' +
  '<span class="octicon octicon-organization"></span>Mozilla</li>' +
  '<li class="vcard-detail" itemprop="homeLocation">' +
  '<span class="octicon octicon-location"></span>Warsaw, Poland</li>' +
  '<li class="vcard-detail" itemprop="url"><span class="octicon-link">' +
  '</span><a href="http://michalbe.blogspot.com" class="url">' +
  'http://michalbe.blogspot.com</a></li><li class="vcard-detail">' +
  '<span class="octicon octicon-clock"></span><span class="join-label">' +
  'Joined on </span><span class="join-date">Jul 28, 2010</span></li>'+
  '<div class="vcard-stats"><a class="vcard-stat" href="/followers">' +
  '<strong class="vcard-stat-count">379</strong>' +
  '<span class="text-muted">followers</span>' +
  '</a><a class="vcard-stat" href="/stars">' +
  '<strong class="vcard-stat-count">25</strong>' +
  '<span class="text-muted">Starred</span></a>' +
  '<a class="vcard-stat" href="/michalbe/following">' +
  '<strong class="vcard-stat-count">30</strong>' +
  '<span class="text-muted">Following</span></a></div>';

nock('https://github.com')
  .get('/michalbe')
  .reply(200, html);

githubVcard('michalbe', function(err, data) {
  assert.equal(data.homeLocation, 'Warsaw, Poland');
});
