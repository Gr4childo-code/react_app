import React from 'react';
import styles from './product.module.css';
import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import Counter from '../../hocs/Counter';

const Product = (props) => {
	const { amount, decrement, increment } = props;

	return (
		<div className={styles.product}>
			<div className={styles.content}>
				<div>
					<h4 className={styles.title}>{props.product.name}</h4>
					<p className={styles.description}>{props.product.ingredients.join(', ')}</p>
					<div className={styles.price}>{props.product.price} $</div>
				</div>
				<div>
					<div className={styles.counter}>
						<div className={styles.count}>{amount}</div>
						<div className={styles.buttons}>
							<button className={styles.button} onClick={decrement}>
								<Minus />
							</button>
							<button className={styles.button} onClick={increment}>
								<Plus />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter(Product);
