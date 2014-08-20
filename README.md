# github-vcard by [@michalbe](http://github.com/michalbe) #
Simple scraper for Github User data

### How to use: ###
```
npm install github-vcard
```
then:
```javascript
var gv = require('github-vcard');

// First argument of the function is a username
gv('michalbe', function(err, result) {
  console.log(result);
  // result:
  // {
  //   followers: '379',
  //   starred: '25',
  //   following: '30',
  //   email: '',
  //   fullName: 'Michał Budzyński',
  //   homeLocation: 'Warsaw, Poland',
  //   worksFor: 'Mozilla',
  //   url: 'http://michalbe.blogspot.com',
  //   joinDate: 'Jul 28, 2010' }'Warsaw, Poland'
  // }
});
```

It was created to get github user's data without authentication. The official gh API allows you to make only 60 requests an hour.
