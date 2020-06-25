import React, {Component} from 'react';
import Navbar from './NavBar';
import logo from './../images/exponential-inc-logo.png';
import NavBar from './NavBar';

export class Header extends Component {
	topLineStyle = () => {
		if (this.props.isMenuOpen === true) {
			return {
				transform: 'rotate(45deg) translateY(0.4rem)',
			};
		} else {
			return {
				transform: 'rotate(0deg) translateY(0)',
			};
		}
	};
	botLineStyle = () => {
		if (this.props.isMenuOpen === true) {
			return {
				// transform: 'rotate(0deg)',
				transform: 'rotate(-45deg) translateY(-1rem)',
				opacity: 0,
			};
		} else {
			return {
				// transform: 'rotate(0)',
				opacity: 1,
				transform: 'rotate(0) translateY(0)',
			};
		}
	};
	midLineStyle = () => {
		if (this.props.isMenuOpen === true) {
			return {
				transform: 'rotate(-45deg) translateY(-0.4rem)',
			};
		} else {
			return {
				transform: 'rotate(0) translateY(0)',
			};
		}
	};
	showHam = () => {
		if (this.props.isDesktop === true) {
			return {
				display: 'none',
			};
		} else {
			return {
				display: 'flex',
			};
		}
	};
	render() {
		if (this.props.isDesktop === true) {
			return (
				<div id='header'>
					<div id='logo-bg'>
						<a href='' id='logo-home'>
							<img id='logo' src={logo} alt='Exponential Inc.' />
						</a>
					</div>
					<NavBar isMenuOpen={this.props.isMenuOpen} isDesktop={this.props.isDesktop} />
				</div>
			);
		}
		return (
			<div id='header'>
				<div id='logo-bg'>
					<a href='' id='logo-home'>
						<img id='logo' src={logo} alt='Exponential Inc.' />
					</a>
				</div>
				<div id='ham-container' onClick={this.props.toggleMenu} isDesktop={this.props.isDesktop} style={this.showHam()}>
					<span className='ham-line' id='top' style={this.topLineStyle()}></span>
					<span className='ham-line' id='mid' style={this.midLineStyle()}></span>
					<span className='ham-line' id='bot' style={this.botLineStyle()}></span>
				</div>
			</div>
		);
	}
}

export default Header;
