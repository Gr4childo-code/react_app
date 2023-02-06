import { combineReducers } from 'redux';

import order from './order';
import products from './products';
import reviews from './reviews';
import restaurants from './restaurants';

export default combineReducers({
	order: order,
	restaurants: restaurants,
	products: products,
	reviews: reviews,
});
