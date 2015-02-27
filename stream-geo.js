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

var locations = {
	sf: '-122.75,36.8,-121.75,37.8',
	nyc: '-74,40,-73,41',
	all: '-180,-90,180,90'
}

// attach to filter stream
var tweetStream = twitter.stream('statuses/filter', { locations: locations.sf });

// on tweet
tweetStream.on('tweet', function (tweet) {

  // check that tweet has geo
  if (tweet.geo) {
    console.log(tweet.geo.coordinates);
  }

});


