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
					<a href='#landing' className='nav-link' onClick={this.props.toggleMenu}>
						Home
					</a>
				</li>
				<li className='nav-item'>
					<a href='#wave1' className='nav-link' onClick={this.props.toggleMenu}>
						About
					</a>
				</li>
				<li className='nav-item'>
					<a href='#wave2' className='nav-link' onClick={this.props.toggleMenu}>
						Get it now
					</a>
				</li>
				<li className='nav-item'>
					<a href='#contact-content' className='nav-link' onClick={this.props.toggleMenu}>
						Contact
					</a>
				</li>
			</ul>
		);
	}
}

export default NavBar;
