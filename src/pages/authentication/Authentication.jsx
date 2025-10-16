import './style.scss';
import AuthenticationToggle from '../../components/features/authentication/authenticationToggle/AuthenticationToggle';
import AuthenticationSignIn from '../../components/features/authentication/authenticationForm/AuthenticationSignIn';
import AuthenticationSignUp from '../../components/features/authentication/authenticationForm/AuthenticationSignUp';
import { useEffect, useState } from 'react';
import { getSession } from '../../services/supabase/supabaseAuthentication';
import { useNavigate } from 'react-router';

const Authentication = () => {

    const [authMode, setAuthMode] = useState("signIn");
    let navigate = useNavigate();

    useEffect(() => {
        getSession()
        .then((data) => {
            if (data.session)
                navigate('/dashboard');
        });
    });

    return (
        <div id='page' className='p-authentication'>
            <h1>Welcome to SenninMode</h1>
            <p>Focus and master your time.</p>
            <AuthenticationToggle authMode={authMode} setAuthMode={setAuthMode} />
            {authMode == "signIn" ? <AuthenticationSignIn /> : <AuthenticationSignUp />}
        </div>
    );
};

export default Authentication;