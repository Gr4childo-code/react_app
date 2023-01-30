import React, { useState, useMemo } from 'react';
import Navigation from './Navigation';
import Restaurant from './Restaurant';

const Restautants = (props) => {
	const [activeId, setActiveId] = useState(props.restaurants[0].id);

	const activeRestaurant = useMemo(
		() => props.restaurants.find((restaurant) => restaurant.id === activeId),
		[activeId, props.restaurants]
	);

	return (
		<div>
			<Navigation restaurants={props.restaurants} onRestaurantClick={setActiveId} />
			<Restaurant activeRestaurant={activeRestaurant} />
		</div>
	);
};

export default Restautants;
