import React, {Component} from 'react';

export class Footer extends Component {
	render() {
		return (
			<div className='footer-container'>
				<div id='footer-main-items'>
					<div className='links-col'>
						<div className='link-container'>
							{' '}
							<a href='#landing' className='nav-link'>
								Home
							</a>
							<a href='#wave1' className='nav-link'>
								About
							</a>
							<a href='#wave2' className='nav-link'>
								Get it now
							</a>
							<a href='#contact-content' className='nav-link'>
								Contact
							</a>
						</div>
					</div>
					<div className='links-col'>
						<div className='link-container'>
							<a href='https://github.com/exponential-inc/lost-app-site' className='github-link'>
								<i className='fab fa-github-square' />
							</a>
						</div>
					</div>
				</div>
				<p id='copyright-text'>&copy; Copyright 2020 Exponential Inc.</p>
			</div>
		);
	}
}

export default Footer;
