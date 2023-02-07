import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;

const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

const reviewSelector = (state, { id }) => reviewsSelector(state)[id];

export const orderProductsSelector = createSelector(
	orderSelector,
	productsSelector,
	(order, products) =>
		Object.keys(order)
			.filter((productId) => order[productId] > 0)
			.map((productId) => products[productId])
			.map((product) => ({
				product: product,
				amount: order[product.id],
				allTotal: order[product.id] * product.price,
			}))
);

export const totalPriceSelector = createSelector(orderProductsSelector, (orderProducts) =>
	orderProducts.reduce((acc, { allTotal }) => acc + allTotal, 0)
);

export const restaurantsListSelector = createSelector(restaurantsSelector, Object.values);

export const amountSelector = (state, { id }) => orderSelector(state)[id] || 0;
export const productSelector = (state, { id }) => productsSelector(state)[id];

export const reviewWitUserSelector = createSelector(
	reviewSelector,
	usersSelector,
	(review, users) => ({
		...review,
		user: users[review.userId]?.name,
	})
);

export const averageRatingSelector = createSelector(
	reviewsSelector,
	(_, { restaurant }) => restaurant.reviews,
	(reviews, ids) => {
		const ratings = ids.map((id) => reviews[id].rating);
		return Math.round(ratings.reduce((acc, rating) => acc + rating) / ratings.length);
	}
);
