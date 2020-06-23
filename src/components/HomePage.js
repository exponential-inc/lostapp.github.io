import React, {Component} from 'react';

export class HomePage extends Component {
	render() {
		return (
			<div>
				<section id='landing'>
					<div id='center'> </div>
					<h1 id='lost-header' data-aos='fade-down' data-aos-duration='1500'>
						lost
					</h1>
					<p id='lost-text' data-aos='fade-down' data-aos-duration='1500' data-aos-delay='750'>
						made for finding your loved ones, no matter where they are
					</p>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='wave' id='wave1'>
						<path
							fill='#6197ff'
							fill-opacity='1'
							d='M0,128L48,117.3C96,107,192,85,288,112C384,139,480,213,576,218.7C672,224,768,160,864,149.3C960,139,1056,181,1152,170.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
						></path>
					</svg>
				</section>
			</div>
		);
	}
}

export default HomePage;
