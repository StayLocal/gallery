var mysql = require('mysql');


var connection = mysql.createConnection({
	user: 'root', //CHANGE TO YOUR LOGIN USER AND PASSWORD
	password: null,
	database: 'gallery'
});

var getImages = function(homeid, callback) {
	connection.query(`SELECT image, caption FROM homeImages WHERE home_id=${homeid}`, (err, results) => {
		if (err) throw err;
		callback(null, results);
	})
};

const postImage = function(homeid, location, number, callback) {
  const newImage = `http://d17fsphohqa4x.cloudfront.net/homeimages/${location}/${location}${number}.jpg` 
  const query = `INSERT INTO homeImages (home_id, image, caption) VALUES ("${homeid}", "${newImage}", "Lorem Ipsum")`
  connection.query(query, ((err, result) => {
    if(err) console.log(err)
    console.log('successful post!!')
    callback(result);
  }))
}

const deleteImage = function(homeId, location, number, callback) {
  const query = `
    DELETE FROM homeImages 
    WHERE home_id = ${homeId} AND
    (image LIKE '%${location}${number}%')
  `
  connection.query(query, ((err, result) => {
    if(err) console.log(err)
      console.log('successful deletion!!')
      callback(result);
  }))
}

const updateImage = function(id, oldLoc, oldNum, newLoc, newNum, callback) {
  const newImage = `http://d17fsphohqa4x.cloudfront.net/homeimages/${newLoc}/${newLoc}${newNum}1.jpg` 
  const query = `
  UPDATE homeImages set image = '${newImage}'
  WHERE home_id = '${id}' AND 
  (image LIKE '%${oldLoc}${oldNum}%')
  `

  console.log(id, oldNum, oldLoc, newNum, newLoc);

  connection.query(query, ((err, result) => {
    if(err) console.log(err);
    console.log(result);
    console.log('successful update!!')
    callback(result);
  }))

  console.log('updateImage');
}
 

 // {"oldLocation": "joshua","oldNumber": "23","newLocation": "japan!","newNumber": "13"}

module.exports = {
  getImages,
  postImage,
  deleteImage,
  updateImage,
}

