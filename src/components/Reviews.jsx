import React from 'react';
import Rate from './Rate';
import style from './reviews.module.css';

const Reviews = (props) => {
	return (
		<div className={style.reviews}>
			{props.reviews.map((review) => (
				<div key={review.id} className={style.review}>
					<div className={style.name}>{review.user}</div>
					<div>{review.text}</div>
					<Rate rating={review.rating} />
				</div>
			))}
		</div>
	);
};

export default Reviews;
