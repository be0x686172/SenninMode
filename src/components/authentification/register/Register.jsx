import './style.scss';

const Register = () => {
    return (
        <div className='component c-Register'>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder='Email address' />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder='Password' />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" placeholder='Confirm Password' />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Register;