import './style.scss';

const Login = () => {
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
        </div>
    );
};

export default Login;