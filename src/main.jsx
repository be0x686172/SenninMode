import { createRoot } from 'react-dom/client';
import './global.scss';
import Dashboard from './pages/dashboard/Dashboard';

createRoot(document.getElementById('root')).render(
  <Dashboard />
)
