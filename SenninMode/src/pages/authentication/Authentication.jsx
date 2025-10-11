import './style.scss';
import AuthenticationToggle from '../../components/features/authentication/authenticationToggle/AuthenticationToggle';
import AuthenticationSignIn from '../../components/features/authentication/authenticationForm/AuthenticationSignIn';
import AuthenticationSignUp from '../../components/features/authentication/authenticationForm/AuthenticationSignUp';
import { useState } from 'react';

const Authentication = () => {

    const [authMode, setAuthMode] = useState("signIn");

    return (
        <div id='page p-authentication'>
            <h1>Welcome to SenninMode</h1>
            <p>Enter SenninMode : focus and master your time.</p>
            <AuthenticationToggle setAuthMode={setAuthMode} />
            {authMode == "signIn" ? <AuthenticationSignIn /> : <AuthenticationSignUp />}
        </div>
    );
};

export default Authentication;