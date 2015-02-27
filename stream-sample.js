var nconf = require('nconf');
var Twit = require('twit');
var _ = require('lodash');

nconf.file({ file: 'config.json' }).env();

var twitter = new Twit({
  consumer_key: nconf.get('TWITTER_CONSUMER_KEY'),
  consumer_secret: nconf.get('TWITTER_CONSUMER_SECRET'),
  access_token: nconf.get('TWITTER_ACCESS_TOKEN'),
  access_token_secret: nconf.get('TWITTER_ACCESS_TOKEN_SECRET')
});

// attach to filter stream
var tweetStream = twitter.stream('statuses/sample');

// on tweet
tweetStream.on('tweet', function (tweet) {
  console.log('---');
  console.log('screen_name:', tweet.user.screen_name);
  console.log('text:', tweet.text);
});


