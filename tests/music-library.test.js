var assert = require('assert');
var musicLib = require('../lib/music-library.js');

describe('Music Library', function() {
  describe('Listing Songs', function () {
    it('should be able to return all songs', function () {
      assert.equal(typeof musicLib.list(), "object");
      assert(musicLib.list().wonderwall);
    });
  });
  describe('Picking Songs', function () {
    it('should return null if we do not request a song', function () {
      assert.equal(musicLib.songPicker(), null);
    });
    it('should be able to return a value for Wonderwall', function () {
      assert(musicLib.songPicker("wonderwall"));
    });
    it('should be able to return a value for Definately Maybe', function () {
      assert(musicLib.songPicker("definately maybee"));
    });
    it('should be able to return a value for Fix You', function () {
      assert(musicLib.songPicker("fix you"));
    });
    it('should be able to return null if we do not have the song', function () {
      assert.equal(musicLib.songPicker("nightwitches"), undefined);
    });
  });
});
