import React, {Component} from 'react';

export class Contact extends Component {
	render() {
		return (
			<div id='contact'>
				<div id='contact-content'>
					<div id='separator'>
						<p id='contcat-header' data-aos='fade-up' data-aos-duration='750'>
							Contact Us
						</p>
					</div>
					<div id='frame-container' data-aos='fade-up' data-aos-duration='950'>
						<iframe src='https://kohyileielliot.typeform.com/to/itDIGsLW' frameborder='0' marginheight='0' marginwidth='0'></iframe>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
