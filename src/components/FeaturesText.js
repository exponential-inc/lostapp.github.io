import React, {Component} from 'react';

export class FeaturesText extends Component {
	render() {
		return (
			<div id='features-text-container'>
				<h3 className='features-text-header' data-aos='fade-up' data-aos-duration='750' data-aos-delay='250'>
					{this.props.textContentHeader}
				</h3>
				<p className='features-text-desc' data-aos='fade-up' data-aos-duration='950' data-aos-delay='250'>
					{this.props.textContentDesc}
				</p>
			</div>
		);
	}
}

export default FeaturesText;
