import React from 'react';
import styled from 'styled-components';


const StyledFeatureImage = styled.div`
	color: white;
	vertical-align: middle;
`

const aStyle = {
	height: '4.8em',
	width: '4.8em',
	fill: 'rgb(255, 255, 255)',
}

class FeatureImage extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (<StyledFeatureImage>
			<button>
			<svg style={aStyle}><path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" fill="#FFFFFF"></path></svg>
			</button>
			<br/>
			<br/>
			<button>
			<svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={aStyle}><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill="evenodd"></path></svg>
			</button>	
			<img src={this.props.imageObj.image}/>
			<button>
			<svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" style={aStyle}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill="evenodd"></path></svg>
			</button>
			<br/>
			<span>{this.props.imageObj.caption}</span>

		</StyledFeatureImage>)
	}
}



export {FeatureImage};