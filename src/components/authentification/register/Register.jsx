import './style.scss';

const Register = ({ setMode }) => {
    return (
        <div className='component c-Register'>
            <button onClick={() => {setMode('login')}}>Login</button>
        </div>
    );
};

export default Register;