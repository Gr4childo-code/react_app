import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './components/App';

import { restaurants } from './fixtures';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App restaurants={restaurants} />
	</React.StrictMode>
);
