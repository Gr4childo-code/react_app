import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Restaurant from '../restuarant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
	const tabs = restaurants.map((restaurant) => ({
		title: restaurant.name,
		content: <Restaurant restaurant={restaurant} />,
	}));
	return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
	restaurants: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};

export default connect((state) => ({
	restaurants: state.restaurants,
}))(Restaurants);
