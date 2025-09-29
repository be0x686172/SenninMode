import './style.scss';

const Login = ({ setMode }) => {
    return (
        <div className='component c-Login'>
            <form>
                <label>Email</label>
                <input type="email" placeholder='Email address' />
                <label>Password</label>
                <input type="password" placeholder='Password' />
                <input type="submit" />
            </form>
            <button onClick={() => {setMode('register')}}>Register</button>
        </div>
    );
};

export default Login;