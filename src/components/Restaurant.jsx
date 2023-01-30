import React from 'react';
import Menu from './Menu';

const Restaurant = (props) => {
	return (
		<div>
			<Menu menu={props.activeRestaurant.menu} />
		</div>
	);
};

export default Restaurant;
