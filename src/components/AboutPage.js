import React, {Component} from 'react';

import InfoCard from './InfoCard';
import world_map from './../images/world_map.svg';
import thinking from './../images/thinking.svg';
import wheelchair from './../images/wheelchair.svg';
export class AboutPage extends Component {
	render() {
		return (
			<div>
				<section id='about'>
					<h2 id='dyk-header' data-aos='fade-up' data-aos-duration='750' data-aos-delay='1750'>
						Did you know?
					</h2>
					<InfoCard imgSrc={thinking} textContent='Dementia is a syndrome in which there is deterioration in memory, thinking, behaviour and the ability to perform everyday activities.' />
					<InfoCard imgSrc={wheelchair} textContent='Dementia is one of the major causes of disability and dependency among older people' />
					<InfoCard imgSrc={world_map} textContent='50 million people suffer from dementia worldwide' />
				</section>
			</div>
		);
	}
}

export default AboutPage;
