import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
	(acc, review) => ({
		...acc,
		[review.id]: review,
	}),
	{}
);

export default (state = defaultReviews, action) => {
	const { type, review, reviewId, userId } = action;
	switch (type) {
		case ADD_REVIEW:
			const { text, rating } = review;
			return {
				...state,
				[reviewId]: { id: reviewId, userId, text, rating },
			};
		default:
			return state;
	}
};
