var mysql = require('mysql');

var connection = mysql.createConnection({
	user: 'root',
	database: 'gallery'
});

var getImages = function(homeid, callback) {
	connection.query(`SELECT image, caption FROM homeImages WHERE home_id=${homeid}`, (err, results) => {
		if (err) throw err;
		callback(null, results);
	})
};


module.exports.getImages = getImages;
