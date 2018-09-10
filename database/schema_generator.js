let imageArrGen = (location, num) => {
	let result = [];
	for (let i=1; i<num+1; i++) {
		let string = `http://d17fsphohqa4x.cloudfront.net/homeimages/${location}/${location}${i}.jpg`
		result.push(string);
	}
	return result;
}

let locationObj = {
	armenia: 18,
	bali: 36,
	fern: 35,
	joshua: 37,
	kuta: 26,
	pond: 9, 
	pool: 24,
	santorini: 13,
	tree: 29,
	vienna: 20
}

let totalImageArrGen = (locationObj) => {
	let result = [];
	for (key in locationObj) {
		result.push(imageArrGen(key, locationObj[key]))
	}
	return result
}

let totalArr = totalImageArrGen(locationObj);

let dataGen = (number, array) => {
	let result = '';
	for (let i=100; i<100+number; i++) {
		let randomArr = totalArr[Math.floor(Math.random()*10)]
		randomArr.forEach((ele)=>{
			let template = `INSERT INTO homeImages (home_id, image, caption) VALUES (${i}, "${ele}", "Some dreamy aspirational lorem ipsum caption here"); `
			console.log(template)
			result = result + template;
		})
	}
	return result;
}

dataGen(100, totalArr)