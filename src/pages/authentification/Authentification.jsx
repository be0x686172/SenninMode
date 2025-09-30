import { useState } from 'react';

import './style.scss';
import Login from '../../components/authentification/login/Login';
import Register from '../../components/authentification/register/Register';

const Authentification = () => {

    const [mode, setMode] = useState('login');

    return (
        <div className='page p-Authentification'>
            <div>
                <img src='logo.png' alt='logo' />
                <h1>Welcome to SenninMode</h1>
                <p>Your Pomodoro Application</p>
            </div>
            {mode == 'login' ? <Login /> : <Register />}
            {mode == 'login' ? <p>New user ? <button onClick={() => setMode('register')}>Register</button></p> : <p>Already have an account ? <button onClick={() => setMode('login')}>Login</button></p>}
        </div>
    );
};

export default Authentification;