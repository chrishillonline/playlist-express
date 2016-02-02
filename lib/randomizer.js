var _ = require('underscore');

module.exports = function(library){
  if(!library || typeof library != "object"){
    throw new Error("No Library!");
  }
  var songs = library.list();
  return _.sample(
    _.keys(songs)
  );
};
