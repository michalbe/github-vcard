'use strict';

var jsdom = require('jsdom');

var gv = function(username, callback) {
  jsdom.env(
    'https://github.com/' + username,
    [],
    function(err, window) {
      var doc = window.document;
      var stats = doc.querySelectorAll('.vcard-stat-count');
      var vcard = {
        followers: stats[0].textContent || 0,
        starred: stats[1].textContent || 0,
        following: stats[2].textContent || 0
      };
      vcard.email = doc.querySelector('.email') || '';
      if (vcard.email) {
        vcard.email = vcard.email.href.replace('mailto:', '');
      }

      vcard.fullName = doc.querySelector('.vcard-fullname') || '';
      if (vcard.fullName) {
        vcard.fullName = vcard.fullName.textContent;
      }

      vcard.homeLocation = doc.querySelector('[itemprop="homeLocation"]') || '';
      if (vcard.homeLocation) {
        vcard.homeLocation = vcard.homeLocation.textContent;
      }

      vcard.worksFor = doc.querySelector('[itemprop="worksFor"]') || '';
      if (vcard.worksFor) {
        vcard.worksFor = vcard.worksFor.textContent;
      }

      vcard.url = doc.querySelector('[itemprop="url"]') || '';
      if (vcard.url) {
        vcard.url = vcard.url.textContent;
      }

      vcard.joinDate = doc.querySelector('[itemprop=".join-date"]') || '';
      if (vcard.joindate) {
        vcard.joinDate = vcard.joinDate.textContent;
      }

      callback(err, vcard);
    }
  )
}

module.exports = gv;
