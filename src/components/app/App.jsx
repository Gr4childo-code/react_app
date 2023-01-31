import React from 'react';
import Restautants from '../restuatants';
import Header from '../header';
import PropTypes from 'prop-types';

const App = ({ restaurants }) => {
	return (
		<div>
			<Header />
			<Restautants restaurants={restaurants} />
		</div>
	);
};
App.propTypes = {
	restaurants: PropTypes.array,
};

export default App;
