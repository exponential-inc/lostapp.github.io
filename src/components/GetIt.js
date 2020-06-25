import React, {Component} from 'react';

export class GetIt extends Component {
	render() {
		return (
			<div id='get-it-container'>
				<section className='get-it-content'>
					<h2 id='get-it-header' data-aos='fade-up' data-aos-duration='750'>
						Get it now
					</h2>
					<div className='get-btn' data-aos='fade-up' data-aos-duration='950'>
						<i className='fab fa-app-store-ios'></i>
						<p className='get-btn-text'>Get it on the App Store</p>
					</div>
					<div className='get-btn' data-aos='fade-up' data-aos-duration='950'>
						<i className='fab fa-google-play'></i>
						<p className='get-btn-text'>Get it on Google Play</p>
					</div>
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

export default GetIt;
