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
				</section>
			</div>
		);
	}
}

export default GetIt;
