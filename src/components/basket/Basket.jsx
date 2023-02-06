import React from 'react';
import { connect } from 'react-redux';
import itemStyles from './basket-item/Basket-item.module.css';
import BasketItem from './basket-item';
import styles from './Basket.module.css';
import Button from '../button';
import { orderProductsSelector, totalPriceSelector } from '../../redux/selectors';

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
	return {
		orderProducts: orderProductsSelector(state),
		totalPrice: totalPriceSelector(state),
	};
})(Basket);
