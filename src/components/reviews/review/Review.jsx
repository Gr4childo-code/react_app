import React from 'react';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import { connect } from 'react-redux';
import { reviewWitUserSelector } from '../../../redux/selectors';

const Review = ({ user, text, rating }) => (
	<div className={styles.review}>
		<div className={styles.content}>
			<div>
				<h4 className={styles.name}>{user}</h4>
				<p className={styles.comment}>{text}</p>
			</div>
			<div className={styles.rate}>
				<Rate value={rating} />
			</div>
		</div>
	</div>
);

Review.propTypes = {
	user: PropTypes.string,
	text: PropTypes.string,
	rating: PropTypes.number.isRequired,
};

export default connect((state, props) => ({
	...reviewWitUserSelector(state, props),
}))(Review);
