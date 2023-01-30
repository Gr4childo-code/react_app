import React from 'react';
import Restautants from '../restuatants';
import Header from '../header';

const App = (props) => {
	return (
		<div>
			<Header />
			<Restautants restaurants={props.restaurants} />
		</div>
	);
};

export default App;
