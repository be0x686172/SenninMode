import './style.scss';

const AuthToggle = () => {
    return (
        <div className='component c-authToggle'>
            <button>Sign In</button>
            <button>Sign Up</button>
            <div className='d-slider'></div>
        </div>
    );
};

export default AuthToggle;