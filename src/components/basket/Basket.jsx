import React from 'react';
import { connect } from 'react-redux';
import itemStyles from './basket-item/Basket-item.module.css';
import BasketItem from './basket-item';
import styles from './Basket.module.css';
import Button from '../button';

const Basket = ({ title = 'Basket', totalPrice, orderProducts }) => {
	if (!totalPrice) {
		return (
			<div className={styles.basket}>
				<h4 className={styles.title}>Select a meal from the list</h4>
			</div>
		);
	}
	return (
		<div className={styles.basket}>
			<h4 className={styles.title}>{title}</h4>
			{orderProducts.map(({ product, amount, subtotal }) => (
				<BasketItem product={product} amount={amount} key={product.id} subtotal={subtotal} />
			))}
			<hr className={styles.hr} />
			<div className={itemStyles.basketItem}>
				<div className={itemStyles.name}>
					<p>Total</p>
				</div>
				<div className={itemStyles.info}>
					<p>{`${totalPrice} $`}</p>
				</div>
			</div>
			<Button primary block>
				checkout
			</Button>
		</div>
	);
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

	const totalPrice = orderProducts.reduce((acc, { allTotal }) => acc + allTotal, 0);
	// console.log(orderProducts);
	// console.log(totalPrice);
	return { orderProducts, totalPrice };
})(Basket);
