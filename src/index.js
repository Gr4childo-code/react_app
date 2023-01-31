import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app';
import { restaurants } from './fixtures';

const root = createRoot(document.getElementById('root'));
root.render(<App restaurants={restaurants} />);
