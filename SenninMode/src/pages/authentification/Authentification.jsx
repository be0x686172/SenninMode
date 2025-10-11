import './style.scss';
import AuthToggle from '../../components/features/authentification/authToggle/AuthToggle';
import AuthSignIn from '../../components/features/authentification/authForm/AuthSignIn';
import AuthSignUp from '../../components/features/authentification/authForm/AuthSignUp';

const Authentification = () => {
    return (
        <div id='page p-authentification'>
            <h1>Welcome to SenninMode</h1>
            <p>Enter SenninMode : focus and master your time.</p>
            <AuthToggle />
            <AuthSignIn />
            <AuthSignUp />
        </div>
    );
};

export default Authentification;