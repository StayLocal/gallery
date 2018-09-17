import React from 'react';
import styled from 'styled-components';
import {PhotoListToggle} from './PhotoListToggle.js';


const StyledFeatureImage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3%;
  object-fit: contain;
  vertical-align: middle;
  margin: auto;
  padding-top: 20%;
  font-size: 14px;
  line-height: 1.43;
`

const TopWrapper = styled.div`
	display: flex;
	flex-direction: row-reverse;
	padding: 2%
`

const MiddleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2%;
`

const BottomWrapper = styled.div`
	display: flex;
	padding-bottom: 20%;
`

const StyledButton = styled.button`
	height: 4.8em;
	width: 4.8em;
	fill: rgb(255, 255, 255);
	background-color: transparent;
	border-color: transparent;
`


function FeatureImage (props) {
	return (
			<div>
			<StyledFeatureImage>
				<TopWrapper>
				<StyledButton onClick={props.toggleModal}>
				<svg viewBox="0 0 20 20"><path d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z" ></path></svg>
				</StyledButton>
				</TopWrapper>
				<MiddleWrapper>
					<StyledButton onClick={props.prevFeatureImg}>
						<svg viewBox="0 0 18 18" ><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" ></path></svg>
					</StyledButton>	
							<img src={props.featureImgObj.image} height="500"/>
					<StyledButton onClick={props.nextFeatureImg}>
						<svg viewBox="0 0 18 18" ><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" ></path></svg>
					</StyledButton>
				</MiddleWrapper>
				<BottomWrapper>
					<PhotoListToggle photoListShow={props.photoListShow} imagesArr={props.imagesArr} imageNum={props.imageNum} featureImgObj={props.featureImgObj} togglePhotoList={props.togglePhotoList} changeFeatureImg={props.changeFeatureImg} />
				</BottomWrapper>
		</StyledFeatureImage>
		</div>
	) 
}



export {FeatureImage};