const express = require('express');
const db = require('../database/db-mysql');
var path = require ('path')

const app = express();
app.use('/homes/:homeId', express.static(__dirname + '/../public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/homes/:homeId/images', (req, res)=>{
		console.log('REQUEST RECEIVED', req.params.homeId)
	let callback = (err, data) => {
		// let imageArr = data.map((obj)=>{
		// 	return [obj.image, obj.caption]
		// })
		res.send(data)
	};

	db.getImages(req.params.homeId, callback)

});



app.listen(3003, () => console.log('listing on port 3003...'))