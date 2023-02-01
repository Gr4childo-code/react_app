import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';

import Restautants from '../restuatants';

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
