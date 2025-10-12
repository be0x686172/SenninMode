import './style.scss';

const AuthenticationToggle = ({ authMode, setAuthMode }) => {
    return (
        <div className='component c-authenticationToggle'>
            <button className={authMode == 'signIn' ? 'active' : ''} onClick={()=> setAuthMode("signIn")}>Sign In</button>
            <button className={authMode == 'signUp' ? 'active' : ''} onClick={() => setAuthMode("signUp")}>Sign Up</button>
            <div className='d-slider'></div>
        </div>
    );
};

export default AuthenticationToggle;