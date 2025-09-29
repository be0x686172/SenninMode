import { useState } from 'react';

import './style.scss';
import Login from '../../components/authentification/login/Login';
import Register from '../../components/authentification/register/Register';

const Authentification = () => {

    const [mode, setMode] = useState('login');

    return (
        <div className='page p-Authentification'>
            <h1>Welcome to SenninMode</h1>
            {mode == 'login' ? <Login setMode={setMode} /> : <Register setMode={setMode} />}
        </div>
    );
};

export default Authentification;