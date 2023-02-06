import { configureStore } from '@reduxjs/toolkit';
import logger from './middleware/logger';
import reducer from './reduser';

export const store = configureStore({
	reducer: reducer,
	middleware: [logger],
});
