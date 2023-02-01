import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './Product.module.css';
import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';

import { increment, decrement } from '../../redux/actions';

const Product = ({ product, amount, increment, decrement, fetchData }) => {
	useEffect(() => {
		fetchData && fetchData(product.id);
		// eslint-disable-next-line
	}, []);

	return (
		<div data-id='product' className={styles.product}>
			<div className={styles.content}>
				<div>
					<h4 className={styles.title}>{product.name}</h4>
					<p className={styles.description}>{product.ingredients?.join(', ')}</p>
					<div className={styles.price}>{product.price} $</div>
				</div>
				<div>
					<div className={styles.counter}>
						<div className={styles.count} data-id='product-amount'>
							{amount}
						</div>
						<div className={styles.buttons}>
							<button className={styles.button} onClick={decrement} data-id='product-decrement'>
								<Minus />
							</button>
							<button className={styles.button} onClick={increment} data-id='product-increment'>
								<Plus />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Product.propTypes = {
	product: PropTypes.shape({
		name: PropTypes.string,
		price: PropTypes.number,
		ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	}).isRequired,
	// from connect
	amount: PropTypes.number,
	increment: PropTypes.func,
	decrement: PropTypes.func,
};

const mapStateToProps = (state) => ({
	amount: state.order,
});

const mapDispatchToProps = {
	increment,
	decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
