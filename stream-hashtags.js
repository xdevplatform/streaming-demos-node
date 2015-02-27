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

// get list of trends for a place
twitter.get('trends/place', { id: 1 }, function (err, data, resp) {

  // get reference to all trend objects
  var trends = data[0].trends;

  // get all trend names
  var trendNames = _.map(trends, function (trend) {
    return trend.name.toLowerCase();
  });

  console.log(trendNames);

  // attach to stream using trends as track parameters
  var tweetStream = twitter.stream('statuses/filter', { track: trendNames.join(',') });
  
  // on tweet
  tweetStream.on('tweet', function (tweet) {

    // loop through all hashtags
    _.each(tweet.entities.hashtags, function (hashtag) {

      // is hashtag trending
      var hashStr = '#' + hashtag.text.toLowerCase();
      if (trendNames.indexOf(hashStr) > -1) {
        console.log(hashStr);
      }

    });

  });

});

/*
// get all places with available trends
twitter.get('trends/available', function (err, data, resp) {

  // log out countries only
  _.each(data, function (place) {
    if (place.placeType.name == 'Country') {
      console.log(place.name, place.woeid);
    };
  });

});
*/

