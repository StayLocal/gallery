import React from 'react';
import path from 'path';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			homeId: '100', //DEFAULTS TO HOME 100
			imagesArr: [] 
		}

		this.getPics = this.getPics.bind(this);
	}

	// getHomeId () {
	// 	let homeId = window.location.href.split('/');
	// 	homeId = homeId[homeId.length-1]; //THIS IS A STRING, NEED TO CONVERT TO INT?
	// 	this.setState({homeId: homeId});
	// }

	getPics() {
		let url = path.join('homes', this.state.homeId, 'images');
		fetch(url)
		.then((res)=>{return res.json()})
		.then((data)=>{
			this.setState({imagesArr: data})
		})
		.catch( (err)=> console.log(err) )
	}

	componentDidMount() {
		// this.getHomeId();
		this.getPics();
	}

	render() {
		return (
			<div>
			<h1> Gallery Component </h1>
			{this.state.imagesArr.map((ele)=>{
				return <img src={ele}/>
			})}
			</div>
		)
	}
}

export default App