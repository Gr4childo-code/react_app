import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { increment, decrement, remove } from '../../../redux/actions';
import Button from '../../button';
import styles from './Basket-item.module.css';

const BasketItem = ({ product, amount, totalPrice, increment, decrement, remove }) => {
	return (
		<div className={styles.basketItem}>
			<div className={styles.name}>
				<span>{product.name}</span>
			</div>
			<div className={styles.info}>
				<div className={styles.counter}>
					<Button onClick={decrement} icon='minus' secondary small />
					<span className={styles.count}>{amount}</span>
					<Button onClick={increment} icon='plus' secondary small />
				</div>
				<p className={cn(styles.count, styles.price)}>{totalPrice} $</p>
				<Button onClick={remove} icon='delete' secondary small />
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch, Props) => ({
	increment: () => dispatch(increment(Props.product.id)),
	decrement: () => dispatch(decrement(Props.product.id)),
	remove: () => dispatch(remove(Props.product.id)),
});

export default connect(null, mapDispatchToProps)(BasketItem);
