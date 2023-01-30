import React from 'react';
import style from './rate.module.css';

const Rate = (props) => {
	return <div className={style.rate}> {props.rating}</div>;
};

export default Rate;
