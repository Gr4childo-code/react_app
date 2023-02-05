import React from 'react';
import PropTypes from 'prop-types';

import Product from '../product';
import styles from './menu.module.css';
import Basket from '../basket';
const Menu = ({ menu }) => {
	return (
		<div className={styles.menu}>
			<div>
				{menu.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
			<div>
				<Basket />
			</div>
		</div>
	);
};

Menu.propTypes = {
	menu: PropTypes.arrayOf(
		PropTypes.shape(
			{
				id: PropTypes.string.isRequired,
			}.isRequired
		)
	),
};
export default Menu;
