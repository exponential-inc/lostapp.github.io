import React, {Component} from 'react';

export class InfoCard extends Component {
	desktopStyles = ['30vw', '1rem'];

	mobileStyles = ['90vw', '1rem 0'];
	responsiveStyles = (idNum) => {
		if (this.props.isDesktop === true) {
			return this.desktopStyles[idNum];
		} else {
			return this.mobileStyles[idNum];
		}
	};
	render() {
		return (
			<div id='card-container' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='100' style={{width: this.responsiveStyles(0), margin: this.responsiveStyles(1)}}>
				<div className='card-part' id='left-side'>
					<img className='infocard-img' src={this.props.imgSrc} alt='' />
				</div>
				<div className='card-part' id='right-side'>
					<p className='infocard-text'>{this.props.textContent}</p>
				</div>
			</div>
		);
	}
}

export default InfoCard;
