import React from 'react';
import Product from '../product';
import styles from './menu.module.css';
const Menu = (props) => {
	return (
		<div className={styles.menu}>
			<div>
				{props.menu.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Menu;
