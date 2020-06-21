import React, {Component} from 'react';
import logo from './../images/exponential-inc-logo.png';

export class Header extends Component {
	render() {
		return (
			<div id='header'>
				<img src={logo} alt='Exponential Inc.' />
				<button id='ham-container' onClick={this.props.toggleMenu}>
					<span className='ham-line' id='top'></span>
					<span className='ham-line' id='mid'></span>
					<span className='ham-line' id='bot'></span>
				</button>
			</div>
		);
	}
}

export default Header;
