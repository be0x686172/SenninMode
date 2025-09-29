import './style.scss';

const Login = ({ setMode }) => {
    return (
        <div className='component c-Login'>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder='Email address' />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder='Password' />
                </div>
                <input type="submit" />
            </form>
            <button onClick={() => {setMode('register')}}>Register</button>
        </div>
    );
};

export default Login;