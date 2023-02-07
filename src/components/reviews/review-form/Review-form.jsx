import React from 'react';
import useForm from '../../../hooks/use-form';
import { connect } from 'react-redux';
import { addReview } from '../../../redux/actions';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review-form.module.css';
import Button from '../../button';

const INIT_VALUE = { name: '', text: '', rating: 3 };

const ReviewForm = ({ onSubmit }) => {
	const { values, handlers, reset } = useForm(INIT_VALUE);
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(values);
		reset();
	};

	return (
		<div className={styles.reviewForm}>
			<h4 className={styles.addReviewTitle}>Leave your review</h4>
			<form onSubmit={handleSubmit}>
				<div className={styles.reviewFormItem}>
					<input placeholder='Your name' className={styles.message} {...handlers.name} />
				</div>
				<div className={styles.reviewFormItem}>
					<textarea placeholder='Your review' className={styles.message} {...handlers.text} />
				</div>
				<div className={styles.rateWrap}>
					<span>Rating: </span>
					<span>
						<Rate {...handlers.rating} />
					</span>
				</div>
				<div className={styles.publish}>
					<Button primary block>
						PUBLISH REVIEW
					</Button>
				</div>
			</form>
		</div>
	);
};
ReviewForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default connect(null, (dispatch, props) => ({
	onSubmit: (review) => dispatch(addReview(review, props.restaurantId)),
}))(ReviewForm);
