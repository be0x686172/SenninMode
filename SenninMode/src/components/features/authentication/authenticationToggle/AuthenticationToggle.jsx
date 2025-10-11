import './style.scss';

const AuthenticationToggle = ({setAuthMode}) => {
    return (
        <div className='component c-authenticationToggle'>
            <button onClick={()=> setAuthMode("signIn")}>Sign In</button>
            <button onClick={() => setAuthMode("signUp")}>Sign Up</button>
            <div className='d-slider'></div>
        </div>
    );
};

export default AuthenticationToggle;