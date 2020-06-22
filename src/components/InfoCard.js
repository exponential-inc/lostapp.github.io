import React, {Component} from 'react';

export class InfoCard extends Component {
	render() {
		return (
			<div id='card-container' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='100'>
				<div className='card-part' id='left-side'>
					<img src={this.props.imgSrc} alt='' />
				</div>
				<div className='card-part' id='right-side'>
					<p className='infocard-text'>{this.props.textContent}</p>
				</div>
			</div>
		);
	}
}

export default InfoCard;
