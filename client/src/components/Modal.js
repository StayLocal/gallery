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
`

class Modal extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (<StyledModal className="someclass" modalDisplayState={this.props.modalDisplayState}>
			<FeatureImage imageObj={this.props.imagesArr[0]} />s

		</StyledModal>)
	}
}



export {Modal};