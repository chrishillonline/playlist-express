var songs = {
  "wonderwall": 13,
  "definately maybee": 21,
  "fix you": 18,
  "bicycle": 22,
  "songbird": 17,
  "bridge over troubled water": 24,
  "son of a preacher man": 13,
  "devils night": 9,
  "acid rampage": 12
}

module.exports = {
  songPicker: songPicker,
  list: list
}

function songPicker(song){
  return songs[song];
}

function list(){
  return songs;
}
