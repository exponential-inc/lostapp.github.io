import React, {Component} from 'react';

class NavBar extends Component {
	displayState = () => {
		if (this.props.isMenuOpen === true) {
			return {
				transform: 'translateX(0)',
				display: 'flex',
			};
		} else {
			return {
				transform: 'translateX(100vw)',
				display: 'none',
			};
		}
	};
	render() {
		return (
			<ul id='nav' style={this.displayState()}>
				<li className='nav-item'>
					<a href='#' className='nav-link'>
						Home
					</a>
				</li>
				<li className='nav-item'>
					<a href='#' className='nav-link'>
						About
					</a>
				</li>
				<li className='nav-item'>
					<a href='#' className='nav-link'>
						Get it now
					</a>
				</li>
				<li className='nav-item'>
					<a href='#' className='nav-link'>
						Contact
					</a>
				</li>
			</ul>
		);
	}
}

export default NavBar;
