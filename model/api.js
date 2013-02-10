var POI = require('../model/poi.js');

exports.save = function(req, res) {
	var poi = new POI({
		name: req.params.name,
		description: req.params.descr,
		longitude: req.params.longitude,
		latitude: req.params.latitude,
		img: req.params.img
		});
	poi.save(function(err) {
		if (err) throw err;
		console.log("POI saved.");
		res.send("POI saved.");
	});
}

exports.list = function(req, res) {
	POI.find(function(err, poi) {
		res.setHeader("Content-Type", "text/javascript;charset=UTF-8");
		res.send(req.query["callback"] + '({"records":'
			+ JSON.stringify(poi) + '});');
	});
}

exports.show = (function(req, res) {
	POI.findOne({name: req.params.name}, function(error, poi) {
		res.send([{Poi: poi}]);
	})
});

exports.near = function(req, res) {
    DogTag.find({coords : { $near : [req.params.lon, req.params.lat], $maxDistance : req.params.dist/68.91}}, function (error, poi) {        
        res.setHeader('Content-Type', 'text/javascript;charset=UTF-8');
        res.send(req.query["callback"] +'({"records":' + JSON.stringify(poi) + '});');
    })
}
