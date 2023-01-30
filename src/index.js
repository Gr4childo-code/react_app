import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './components/app';

import { restaurants } from './fixtures';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App restaurants={restaurants} />);
