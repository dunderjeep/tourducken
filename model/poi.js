var mongoose = require('mongoose')
  ,	Schema = mongoose.Schema;

var poiSchema = new Schema({
	name:String,
	description:String,
	date: {type: Date, default: Date.now},
	longitude: Number,
	latitude: Number,
	img:String
});

module.exports = mongoose.model('POI', poiSchema);
