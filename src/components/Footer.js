import React, {Component} from 'react';

export class Footer extends Component {
	render() {
		return (
			<div className='footer-container'>
				<div id='footer-main-items'>
					<div className='links-col'>
						<div className='link-container'>
							{' '}
							<a href='#' className='nav-link'>
								Home
							</a>
							<a href='#' className='nav-link'>
								About
							</a>
							<a href='#' className='nav-link'>
								Get it now
							</a>
							<a href='#' className='nav-link'>
								Contact
							</a>
						</div>
					</div>
					<div className='links-col'>
						<div className='link-container'>
							<i className='fab fa-github-square'></i>
							<i className='fas fa-envelope-square'></i>
						</div>
					</div>
				</div>
				<p id='copyright-text'>&copy; Copyright 2020 Exponential Inc.</p>
			</div>
		);
	}
}

export default Footer;
