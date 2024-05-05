import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.scss'

const root = document.getElementById('root');
createRoot(root!).render(
  <App />
)
