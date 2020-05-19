import React from 'react';
import '../styles/scss/homepage.scss';
import Showcase from './mixins/Showcase'
import $ from 'jquery';

function Homepage() {
	return (
		<div className="homepage">
			<Showcase />
		</div>
	);
}

export default Homepage;
