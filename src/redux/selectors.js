import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;

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
