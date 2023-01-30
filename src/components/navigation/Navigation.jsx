import React from 'react';
import styles from './navigation.module.css';

const Navigation = (props) => {
	return (
		<div className={styles.list}>
			{props.restaurants.map(({ id, name }) => (
				<span key={id} className={styles.restaurant} onClick={() => props.onRestaurantClick(id)}>
					{name}
				</span>
			))}
		</div>
	);
};

export default Navigation;
