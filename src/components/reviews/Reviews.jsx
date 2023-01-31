import React from 'react';
import PropTypes from 'prop-types';

import styles from './reviews.module.css';
import Review from './review';

const Reviews = ({ reviews }) => {
	return (
		<div className={styles.reviews}>
			{reviews.map((review) => (
				<Review key={review.id} {...review} />
			))}
		</div>
	);
};
Reviews.propTypes = {
	reviews: PropTypes.array.isRequired,
};

export default Reviews;
