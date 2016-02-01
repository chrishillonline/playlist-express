var assert = require('assert');
var musicLib = require('../lib/music-library.js');

describe('Music Library', function() {
  describe('Listing Songs', function () {
    it('should be able to return all songs', function () {
      assert.equal(typeof musicLib.list(), "object");
      assert.equal(musicLib.list().wonderwall, true);
    });
  });
  describe('Picking Songs', function () {
    it('should return null if we do not request a song', function () {
      assert.equal(musicLib.songPicker(), null);
    });
    it('should be able to return a value for Wonderwall', function () {
      assert.equal(musicLib.songPicker("wonderwall"), true);
    });
    it('should be able to return a value for Definately Maybe', function () {
      assert.equal(musicLib.songPicker("definately maybee"), true);
    });
    it('should be able to return a value for Fix You', function () {
      assert.equal(musicLib.songPicker("fix you"), true);
    });
    it('should be able to return null if we do not have the song', function () {
      assert.equal(musicLib.songPicker("nightwitches"), undefined);
    });
  });
});
