import { createRoot } from 'react-dom/client'
import './global.scss';
import Authentication from './pages/authentication/Authentication';

createRoot(document.getElementById('root')).render(
  <Authentication />
)
