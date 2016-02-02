// create a library of songs
// create now playing (20 seconds)
// create a quee of songs which are waiting

var express = require('express');
var musicLibrary = require('./lib/music-library.js');
var _ = require("underscore");

var app = express();
var port = 3000;
var router = express.Router();
var playlist = [];
var songs = musicLibrary.list();

// router.route('/disco').get(function(request, response){
//   console.log("I got a request on /disco");
// });

router.route('/').get(function(request, response){
  response.status(200).send({cool: "beans"});
});

router.route('/songs').get(function(request, response){
  response.send(
    "The following routes are available<br>" +
    "songs/list | Get a list of songs"
  );
});

router.route('/songs/list').get(function(request, response){
  if(!songs){
    return response.status(503).send("Service Unavailable");
  }
  return response.status(200).send(makeReadableList(songs));

  function makeReadableList(songs){
    var songHtml = "";
    _.each(songs, function(value, key){songHtml = songHtml + key + "<br>"});
    return songHtml;
  }
});

router.route('/songs/add').post(function(request, response){
  if (!request.query){
    return response.status(400).send("Please give a song name and it length in seconds");
  }
  var payload = request.query;
  if (!payload.name || !payload.time){
    return response.status(400).send("Song name and time is required");
  }
  songs[payload.name] = payload.time;
  return response.status(200).send(payload.name + " has been added!");
});

// router.route('/songs/list').get(function(request, response){
//
// });

app.use('/', router);
app.listen(port, function () {
    console.log('App listening on port %s', port);
});
