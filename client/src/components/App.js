import React from 'react';
import path from 'path';
import fetch from 'node-fetch';
import {Modal} from './Modal.js';
import styled from 'styled-components';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			homeId: '101', //DEFAULTS TO HOME 100
			imagesArr: [{image: null, caption: null}],
			modalDisplay: false,
			featureImgObj: {image: null, caption: null},
			photoListArr: [],
			photoListShow: true
		}

		this.getPics = this.getPics.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.togglePhotoList = this.togglePhotoList.bind(this);
		this.changeFeatureImg = this.changeFeatureImg.bind(this);
		this.prevFeatureImg = this.prevFeatureImg.bind(this);
		this.nextFeatureImg = this.nextFeatureImg.bind(this);

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
			data = data.map((obj, index) => {
				obj.index = index;
				return obj
			})
			this.setState({
				imagesArr: data,
				featureImgObj: data[0]
			})
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

	changeFeatureImg(event) {
		let index = event.target.getAttribute("index")
		this.setState((prevState, props)=>{
			return {
				featureImgObj: prevState.imagesArr[index]}
		})
	}

	nextFeatureImg(event) {
		if (this.state.featureImgObj.index-1 < this.state.imagesArr.length) {
			this.setState((prevState, props)=>{
				return {
					featureImgObj: prevState.imagesArr[prevState.featureImgObj.index+1]}
			})
		}
	}

	prevFeatureImg(event) {
		if (this.state.featureImgObj.index > 0) {
			this.setState((prevState, props)=>{
				return {
					featureImgObj: prevState.imagesArr[prevState.featureImgObj.index-1]}
			})
		}
	}

	togglePhotoList() {
		this.setState((prevState, props) => {
			return {photoListShow: !prevState.photoListShow}
		})
	}

	render() {
		return (
			<div>
			<h1> Gallery Component </h1> 
			<div className="modal">
			<img src={this.state.imagesArr[0].image} onClick={this.toggleModal}/>
			<Modal imagesArr={this.state.imagesArr} modalDisplayState={this.state.modalDisplay} state={this.state} changeFeatureImg={this.changeFeatureImg} togglePhotoList={this.togglePhotoList} nextFeatureImg={this.nextFeatureImg} prevFeatureImg={this.prevFeatureImg} toggleModal={this.toggleModal}/>
			</div>
			</div>
		)
	}
}

export default App

