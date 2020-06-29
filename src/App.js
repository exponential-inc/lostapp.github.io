import React, {Component} from 'react';
import './css/App.css';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import GetIt from './components/GetIt';
import Contact from './components/Contact';
class App extends Component {
	state = {
		isMenuOpen: false,
		isDesktop: false,
	};
	//check window size
	componentDidMount() {
		if (document.body.clientWidth >= 800) {
			this.setState({isDesktop: true, isMenuOpen: true});
		} else {
			this.setState({isDesktop: false});
		}
	}
	//toggle menu
	toggleMenu = () => {
		if (this.state.isMenuOpen === true) {
			this.setState({isMenuOpen: false});
		} else {
			this.setState({isMenuOpen: true});
		}
	};

	render() {
		if (this.state.isDesktop === true) {
			return (
				<div className='all-content'>
					<Header toggleMenu={this.toggleMenu} isMenuOpen={this.state.isMenuOpen} isDesktop={this.state.isDesktop} />
					<div className='main-content'>
						<HomePage isDesktop={this.state.isDesktop} />
						<AboutPage isDesktop={this.state.isDesktop} />
						<GetIt isDesktop={this.state.isDesktop} />
						<Contact isDesktop={this.state.isDesktop} />
					</div>
					<Footer isDesktop={this.state.isDesktop} />
				</div>
			);
		} else {
			return (
				<div className='all-content'>
					<Header toggleMenu={this.toggleMenu} isMenuOpen={this.state.isMenuOpen} isDesktop={this.state.isDesktop} />
					<NavBar toggleMenu={this.toggleMenu} isMenuOpen={this.state.isMenuOpen} />
					<div className='main-content'>
						<HomePage isDesktop={this.state.isDesktop} />
						<AboutPage isDesktop={this.state.isDesktop} />
						<GetIt isDesktop={this.state.isDesktop} />
						<Contact isDesktop={this.state.isDesktop} />
					</div>
					<Footer isDesktop={this.state.isDesktop} />
				</div>
			);
		}
	}
}

export default App;
