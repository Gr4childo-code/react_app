import { combineReducers } from 'redux';

import order from './order';
import products from './products';
import reviews from './reviews';
import restaurants from './restaurants';
import users from './users';

export default combineReducers({
	order: order,
	restaurants: restaurants,
	products: products,
	reviews: reviews,
	users: users,
});
