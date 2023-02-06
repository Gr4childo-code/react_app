import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from './middleware/logger';
import reducer from './reduser';

const enchanceLogger = composeWithDevTools(logger);

export const store = configureStore({
	reducer: reducer,
	middleware: [logger],
});
