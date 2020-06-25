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

	//responsive styles
	navStyle = () => {
		return {
			height: '8vh',
			flexDirection: 'row',
			position: 'relative',
			zIndex: '-1',
			justifyContent: 'flex-end',
		};
	};
	render() {
		if (this.props.isDesktop === true) {
			return (
				<ul id='nav' style={this.navStyle()}>
					<li className='nav-item' style={{margin: '0 2rem'}}>
						<a href='#landing' className='nav-link' onClick={this.props.toggleMenu} style={{fontSize: '1rem'}}>
							Home
						</a>
					</li>
					<li className='nav-item' style={{margin: '0 2rem'}}>
						<a href='#wave1' className='nav-link' onClick={this.props.toggleMenu} style={{fontSize: '1rem'}}>
							About
						</a>
					</li>
					<li className='nav-item' style={{margin: '0 2rem'}}>
						<a href='#wave2' className='nav-link' onClick={this.props.toggleMenu} style={{fontSize: '1rem'}}>
							Get it now
						</a>
					</li>
					<li className='nav-item' style={{margin: '0 2rem'}}>
						<a href='#contact-content' className='nav-link' onClick={this.props.toggleMenu} style={{fontSize: '1rem'}}>
							Contact
						</a>
					</li>
				</ul>
			);
		} else {
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
}

export default NavBar;
