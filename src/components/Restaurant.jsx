import React from 'react';
import Menu from './Menu';
import Reviews from './Reviews';
import Rate from './Rate';

import style from './restuarant.module.css';

const Restaurant = (props) => {
	let calcRating = 0;
	if (props.activeRestaurant.reviews) {
		const ratingSum = props.activeRestaurant.reviews.reduce(
			(accumulator, currentValue) => accumulator + currentValue.rating,
			0
		);
		calcRating = ratingSum / props.activeRestaurant.reviews.length;
		calcRating = calcRating % 1 === 0 ? calcRating : calcRating.toFixed(1);
	}
	return (
		<div>
			<Menu menu={props.activeRestaurant.menu} />
			<div className={style.calcRating}>
				Средний рейтинг: <Rate rating={calcRating} />
			</div>
			<div>
				<Reviews reviews={props.activeRestaurant.reviews} />
			</div>
		</div>
	);
};

export default Restaurant;
