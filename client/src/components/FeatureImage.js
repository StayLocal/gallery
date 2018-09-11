import React from 'react';
import styled from 'styled-components';
import {PhotoListToggle} from './PhotoListToggle.js';


const StyledWrapper = styled.div`
	padding: 5%
`

const StyledFeatureImage = styled.div`
	vertical-align: middle;
  font-size: 14px;
  line-height: 1.43;
`

const StyledButton = styled.button`
	height: 4.8em;
	width: 4.8em;
	fill: rgb(255, 255, 255);
`


function FeatureImage (props) {
	return (
			<div>
				<StyledWrapper>
				<StyledFeatureImage>
				<StyledButton>
				<svg viewBox="0 0 47.971 47.971"><path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" ></path></svg>
			</StyledButton>
			<br/>
			<br/>
			<StyledButton onClick={props.prevFeatureImg}>
				<svg viewBox="0 0 18 18" role="presentation" ><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" ></path></svg>
			</StyledButton>	
				<img src={props.featureImgObj.image}/>
			<StyledButton onClick={props.nextFeatureImg}>
				<svg viewBox="0 0 18 18" role="presentation" ><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" ></path></svg>
			</StyledButton>
			<br/>
				<span>{props.featureImgObj.index+1}/{props.imagesArr.length} {props.featureImgObj.caption}</span>
				
		</StyledFeatureImage>
			<PhotoListToggle photoListShow={props.photoListShow} imagesArr={props.imagesArr} imageNum={props.imageNum} featureImgObj={props.featureImgObj} togglePhotoList={props.togglePhotoList} changeFeatureImg={props.changeFeatureImg} />
		<br/>
		</StyledWrapper>
		</div>
		) 
}



export {FeatureImage};