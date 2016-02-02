var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var SongSchema = new Schema({
  name: String,
  time: Number
});

module.exports = mongoose.model('Songs', SongSchema);
