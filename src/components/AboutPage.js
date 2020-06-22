import React, {Component} from 'react';

import InfoCard from './InfoCard';
import FeaturesText from './FeaturesText';
import world_map from './../images/world_map.svg';
import thinking from './../images/thinking.svg';
import wheelchair from './../images/wheelchair.svg';
import iphone_x from './../images/iphone-x-flat-buttons.svg';
export class AboutPage extends Component {
	render() {
		return (
			<div>
				<section id='about'>
					<h2 id='dyk-header' data-aos='fade-up' data-aos-duration='750' data-aos-delay='1750'>
						Did you know?
					</h2>
					<div id='infocard-container'>
						<InfoCard imgSrc={thinking} textContent='Dementia is a syndrome in which there is deterioration in memory, thinking, behaviour and the ability to perform everyday activities.' />
						<InfoCard imgSrc={wheelchair} textContent='Dementia is one of the major causes of disability and dependency among older people' />
						<InfoCard imgSrc={world_map} textContent='50 million people suffer from dementia worldwide' />
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
					<div className='features-container'>
						<FeaturesText textContentHeader='View their location' textContentDesc={`Built with Google Map's API, our in-app map will clearly display the location of your loved one with accuracy of up to a 5m radius`} />
						<FeaturesText textContentHeader='View their location' textContentDesc={`Built with Google Map's API, our in-app map will clearly display the location of your loved one with accuracy of up to a 5m radius`} />
						<img src={iphone_x} alt='' id='iphone-x' data-aos='fade-up' data-aos-duration='750' data-aos-delay='250' />
						<FeaturesText textContentHeader='View their location' textContentDesc={`Built with Google Map's API, our in-app map will clearly display the location of your loved one with accuracy of up to a 5m radius`} />
						<FeaturesText textContentHeader='View their location' textContentDesc={`Built with Google Map's API, our in-app map will clearly display the location of your loved one with accuracy of up to a 5m radius`} />
					</div>
				</section>
			</div>
		);
	}
}

export default AboutPage;
