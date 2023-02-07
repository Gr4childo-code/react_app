import React from 'react';
import PropTypes from 'prop-types';

import styles from './reviews.module.css';
import Review from './review';
import ReviewForm from './review-form';

const Reviews = ({ reviews, restaurantId }) => {
	return (
		<div className={styles.reviews}>
			{reviews.map((id) => (
				<Review key={id} id={id} data-id='Reviews' />
			))}
			<ReviewForm restaurantId={restaurantId} />
		</div>
	);
};
Reviews.propTypes = {
	reviews: PropTypes.array.isRequired,
};

export default Reviews;
