import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/app';
import { restaurants } from './fixtures';

import { store } from './redux/store';

const root = createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App restaurants={restaurants} />
	</Provider>
);
