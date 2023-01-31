import React from 'react';
import Restautants from '../restuatants';
import Header from '../header';

const App = ({ restaurants }) => {
	return (
		<div>
			<Header />
			<Restautants restaurants={restaurants} />
		</div>
	);
};

export default App;
