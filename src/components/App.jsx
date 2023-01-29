import React from 'react';
import Restautants from './Restautants';

const App = (props) => {
	return <Restautants restaurants={props.restaurants} />;
};

export default App;
