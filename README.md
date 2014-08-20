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
  //   email: '',
  //   name: 'Michał Budzyński',
  //   location: 'Warsaw, Poland',
  //   company: 'Mozilla',
  //   url: 'http://michalbe.blogspot.com',
  // }
});
```

It was created to get github user's data without authentication. The official gh API allows you to make only 60 requests an hour.
