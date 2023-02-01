import { DECREMENT, INCREMENT } from '../constants';

//{[productID]:amount}
export default (state = [], action) => {
	const { type, id } = action;
	switch (type) {
		case INCREMENT:
			return { ...state, [id]: (state[id] || 0) + 1 };
		case DECREMENT:
			return { ...state, [id]: state[id] < 1 ? 0 : (state[id] || 0) - 1 };
		default:
			return state;
	}
};
