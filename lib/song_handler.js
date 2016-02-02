var SongDoc = require('../models/songs.js');

module.exports = {
  save: save
}

function save(song, callback){
  var songToSave = new SongDoc();
  songToSave.name = song.name;
  songToSave.time = song.time;
  songToSave.save(function(err){
    if(err){
      console.log(err);
    } else {
      console.log("Cool!");
      callback();
    }
  })
}
