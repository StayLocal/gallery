import React from 'react';
import styled from 'styled-components';
import {FeatureImage} from './FeatureImage.js';


//NEED TO SWITCH DISPLAY
const StyledModal = styled.div`
	display: ${props => props.modalDisplayState ? "none" : "block"};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.85);
  color: white;
	font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
	padding: 5%
`
function Modal(props) {
	return (<StyledModal modalDisplayState={props.modalDisplayState}>
			<FeatureImage imagesArr={props.state.imagesArr} changeFeatureImg={props.changeFeatureImg} imageNum={props.state.imageNum} photoListShow={props.state.photoListShow} togglePhotoList={props.togglePhotoList} featureImgObj={props.state.featureImgObj} nextFeatureImg={props.nextFeatureImg} prevFeatureImg={props.prevFeatureImg}/>
			
		</StyledModal>)
}


export {Modal};