var assert = require('assert');
var randomizer = require('../lib/randomizer.js');
var songLibrary = {
  list: function(){
    return {
      "wonderwall": 13,
      "definately maybee": 21,
      "fix you": 18
    }
  }
}

describe("Getting a random song", function(){
  describe("Throwing Errors", function(){
    it("Throws an error if no library is passed to it", function(){
      assert.throws(randomizer, Error, "No Library!");
    });
  });
  describe("Picks a random song", function(){
    it("returns a random songs", function(){
      assert.equal(typeof randomizer(songLibrary), "string");
    });
    it("must return a song from the library", function(){
      var result = randomizer(songLibrary);
      var acceptableResults = [
        "wonderwall","definately maybee","fix you"
      ]
      assert.notEqual(acceptableResults.indexOf(result), -1);
    });
  });
});
