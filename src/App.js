import React, {Component} from 'react';
import './css/App.css';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
class App extends Component {
	state = {
		isMenuOpen: false,
	};
	//toggle menu
	toggleMenu = () => {
		if (this.state.isMenuOpen === true) {
			this.setState({isMenuOpen: false});
		} else {
			this.setState({isMenuOpen: true});
		}
	};
	render() {
		return (
			<div className='all-content'>
				<Header toggleMenu={this.toggleMenu} isMenuOpen={this.state.isMenuOpen} />
				<NavBar isMenuOpen={this.state.isMenuOpen} />
				<div className='main-content'>
					<HomePage />
					<AboutPage />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
