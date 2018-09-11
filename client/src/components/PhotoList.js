import React from 'react';
import styled from 'styled-components';


const StyledThumbnail = styled.div`
	display: inline-block;
`

function Thumbnail(props) {
	return (
		<StyledThumbnail onClick={props.changeFeatureImg} >
			<img src={props.imageObj.image} height="67" width="100" index={props.imageObj.index} />
		</StyledThumbnail>)
}

const StyledPhotoList = styled.div`
	display: flex;
	width: 900px;
	flex-wrap: wrap;
	justify-content: space-evenly;
`

function PhotoList(props) {
	return (
			<StyledPhotoList >
				{props.imagesArr.map((ele)=>{
					return <Thumbnail imageObj={ele} changeFeatureImg={props.changeFeatureImg}/>
				})}
			</StyledPhotoList>
		)
}


export {PhotoList};