import React, {Component} from 'react';
import './css/App.css';

import Header from './components/Header';
import NavBar from './components/NavBar';
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
			<div>
				<Header toggleMenu={this.toggleMenu} isMenuOpen={this.state.isMenuOpen} />
				<NavBar isMenuOpen={this.state.isMenuOpen} />
			</div>
		);
	}
}

export default App;
