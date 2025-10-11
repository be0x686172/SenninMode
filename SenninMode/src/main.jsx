import { createRoot } from 'react-dom/client'
import './global.scss';
import Authentification from './pages/authentification/Authentification';

createRoot(document.getElementById('root')).render(
  <Authentification />
)
