import React from 'react';
import { connect } from 'react-redux';

const Basket = ({ title = 'Basket', totalPrice, orderProducts }) => {
	return <div>Basket</div>;
};

export default connect((state) => {
	const allProducts = state.restaurants.flatMap((restaurant) => restaurant.menu);

	const orderProducts = Object.keys(state.order)
		.filter((productId) => state.order[productId] > 0)
		.map((productId) => allProducts.find((product) => product.id === productId))
		.map((product) => ({
			product: product,
			amount: state.order[product.id],
			allTotal: state.order[product.id] * product.price,
		}));

	// const totalPrice = orderProducts.reduce();
	console.log(orderProducts);
	return orderProducts;
})(Basket);
