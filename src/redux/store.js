import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';

import logger from './middleware/logger';
import generateUuid from './middleware/generateId';

import reducer from './reduser';

const enchanceLogger = composeWithDevTools(generateUuid, logger);

export const store = configureStore({
	reducer: reducer,
	middleware: [generateUuid, logger],
});
