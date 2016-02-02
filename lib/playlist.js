module.exports = function(currentPlaylist, addedSong){
  currentPlaylist.push(addedSong);
  return currentPlaylist;
}
