import React, {Component} from 'react';

import InfoCard from './InfoCard';
import FeaturesText from './FeaturesText';
import world_map from './../images/world_map.svg';
import thinking from './../images/thinking.svg';
import wheelchair from './../images/wheelchair.svg';
import iphone_x from './../images/iphone-x-flat-buttons.svg';
export class AboutPage extends Component {
	desktopStyles = ['3rem', 'flex', 'row', '30vw', '1rem', '-20vh'];

	mobileStyles = ['2rem', 'block', 'column', '90vw', '2rem', '0'];
	responsiveStyles = (idNum) => {
		if (this.props.isDesktop === true) {
			return this.desktopStyles[idNum];
		} else {
			return this.mobileStyles[idNum];
		}
	};
	render() {
		return (
			<div>
				<section id='about'>
					<h2 id='dyk-header' data-aos='fade-up' data-aos-duration='750' data-aos-delay='1750' style={{fontSize: this.responsiveStyles(0)}}>
						Did you know?
					</h2>
					<div id='infocard-container' style={{display: this.responsiveStyles(1)}}>
						<InfoCard imgSrc={thinking} textContent='Dementia is a syndrome in which there is deterioration in memory, thinking, behaviour and the ability to perform everyday activities.' isDesktop={this.props.isDesktop} />
						<InfoCard imgSrc={wheelchair} textContent='Dementia is one of the major causes of disability and dependency among older people' isDesktop={this.props.isDesktop} />
						<InfoCard imgSrc={world_map} textContent='50 million people suffer from dementia worldwide' isDesktop={this.props.isDesktop} />
					</div>
					<h2 id='dyk-header' data-aos='fade-up' data-aos-duration='750' data-aos-delay='250'>
						that's where
						<br />
						<span className='emphasis'>lost</span> <br />
						comes in.
					</h2>
					<p id='about-lost-subheader' data-aos='fade-up' data-aos-duration='950' data-aos-delay='250'>
						lost helps you locate family members that need help with navigation, easily and effectively
					</p>
					<div className='features-container' style={{flexDirection: this.responsiveStyles(2), margin: this.responsiveStyles(4)}}>
						<FeaturesText textContentHeader='View their location' textContentDesc={`Built with Google Map's API, our in-app map will clearly display the location of your loved one with accuracy of up to a 5m radius`} />
						<FeaturesText textContentHeader='View their location' textContentDesc={`Built with Google Map's API, our in-app map will clearly display the location of your loved one with accuracy of up to a 5m radius`} />
						<img src={iphone_x} alt='' id='iphone-x' data-aos='fade-up' data-aos-duration='750' data-aos-delay='250' style={{minWidth: this.responsiveStyles(3)}} />
						<FeaturesText textContentHeader='View their location' textContentDesc={`Built with Google Map's API, our in-app map will clearly display the location of your loved one with accuracy of up to a 5m radius`} />
						<FeaturesText textContentHeader='View their location' textContentDesc={`Built with Google Map's API, our in-app map will clearly display the location of your loved one with accuracy of up to a 5m radius`} />
					</div>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='wave' id='wave2' style={{marginTop: this.responsiveStyles(5)}}>
						<path
							fill='#f8f8f8'
							fill-opacity='1'
							d='M0,128L48,117.3C96,107,192,85,288,112C384,139,480,213,576,218.7C672,224,768,160,864,149.3C960,139,1056,181,1152,170.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
						></path>
					</svg>
				</section>
			</div>
		);
	}
}

export default AboutPage;
