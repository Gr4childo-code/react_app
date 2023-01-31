import { createRoot } from 'react-dom/client';
import './index.css';

import App from './components/app';

import { restaurants } from './fixtures';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App restaurants={restaurants} />);
