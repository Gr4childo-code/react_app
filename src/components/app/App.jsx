import React from 'react';
import Header from '../header';
import Restaurants from '../restaurants';

const App = ({ restaurants }) => {
	return (
		<div>
			<Header />
			<Restaurants />
		</div>
	);
};

export default App;
