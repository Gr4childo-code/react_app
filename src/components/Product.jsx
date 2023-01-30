import React from 'react';

import Counter from '../hocs/Counter';

import style from './product.module.css';

const Product = (props) => {
	const { amount, decrement, increment } = props;

	return (
		<div className={style.card}>
			<p>{props.product.name}</p>
			<p>{props.product.price} $</p>
			<div className={style.counter}>
				<button className={style.btn_counter} onClick={decrement}>
					-
				</button>
				<span>{amount}</span>
				<button className={style.btn_counter} onClick={increment}>
					+
				</button>
			</div>
		</div>
	);
};

export default Counter(Product);
