const express = require('express');
const db = require('../database/db-mysql');
var path = require ('path')

const app = express();
app.use(express.static(__dirname + '/../public'));


app.get('/homes/:homeId/images', (req, res)=>{
	let callback = (err, data) => {
		let imageArr = data.map((obj)=>{
			return obj.image
		})
		res.send(imageArr)
	};

	db.getImages(req.params.homeId, callback)

});



app.listen(3003, () => console.log('listing on port 3003...'))