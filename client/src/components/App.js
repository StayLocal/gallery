import React from 'react';
import path from 'path';
import fetch from 'node-fetch';
import {Modal} from './Modal.js';
import styled from 'styled-components';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			homeId: '100', //DEFAULTS TO HOME 100
			imagesArr: [{image: null, caption: null}],
			modalDisplay: false
		}

		this.getPics = this.getPics.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
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

	toggleModal() {
		this.setState({modalDisplay: !this.state.modalDisplay});
	}

	componentDidMount() {
		// this.getHomeId();
		this.getPics();
	}

	render() {
		return (
			<div>
			<h1> Gallery Component </h1>
			<div className="modal">
			<img src={this.state.imagesArr[0].image} onClick={this.toggleModal}/>
			<Modal imagesArr={this.state.imagesArr} modalDisplayState={this.state.modalDisplay} imagesArr={this.state.imagesArr}/>
			</div>
			</div>
		)
	}
}

export default App

//PASS CAPTION INFO INTO PROP