var assert = require('assert');
var playlist = require('../lib/playlist.js');

describe('Playlist', function() {
  it('Should add a song to the playlist', function () {
    var result = playlist(["wonderwall"], "fix you");
    assert.equal(result.length, 2);
    assert.equal(result[0], "wonderwall");
    assert.equal(result[1], "fix you");
  });
});
