var songs = {
  "wonderwall": true,
  "definately maybee": true,
  "fix you": true
}

module.exports = {
  songPicker: songPicker,
  list: list
}

function songPicker(song){
  return songs[song];
}

function list(){
  return songs
}
