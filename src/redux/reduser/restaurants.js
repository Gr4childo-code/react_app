import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
	(acc, restaurant) => ({
		...acc,
		[restaurant.id]: restaurant,
	}),
	{}
);

export default (state = defaultRestaurants, action) => {
	const { type, restaurantId, reviewId } = action;

	switch (type) {
		case ADD_REVIEW:
			const restaurant = state[restaurantId];
			return {
				...state,
				[restaurantId]: {
					...restaurant,
					reviews: [...restaurant.reviews, reviewId],
				},
			};
		default:
			return state;
	}
};
