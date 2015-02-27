twitter-streaming-demos-node
==========

Basic demos demonstrating Twitter streaming APIs.


Installing and Running
----

Install [Node.js](http://nodejs.org/).

Clone GitHub repo:

```
git clone https://github.com/twitterdev/twitter-streaming-demos-node
```

Create a [Twitter application](https://apps.twitter.com).

Create a `config.json` file using `config.sample.json` as a template. Fill in your Twitter App API keys.


Install node module dependencies:

```
npm install
```

Run 1% sample demo:

```
node stream-sample.js
```
Run trending #hashtag demo:

```
node stream-hashtags.js
```
Run geo demo:

```
node stream-geo.js
```
Run client-side streaming demo:

```
Run index.html in a web server environment
```
Resources
----
- [Twitter API statuses/sample stream](https://dev.twitter.com/streaming/reference/get/statuses/sample)
- [Twitter API statuses/filter stream](https://dev.twitter.com/streaming/reference/post/statuses/filter)
- [Twitter REST API Rate Limiting](https://dev.twitter.com/rest/public/rate-limiting)
- [PubNub Twitter Stream](http://www.pubnub.com/developers/data-streams/twitter-stream)