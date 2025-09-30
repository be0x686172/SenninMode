import { useState } from 'react';
import './style.scss';

const Register = () => {

    const [error, setError] = useState(null);

    const handleForm = (event) => 
    {
        event.preventDefault();

        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
    }

    return (
        <div className='component c-Register'>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder='Email address' />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" placeholder='Password' />
                </div>
                <div>
                    <label>Password confirmation</label>
                    <input type="password" name="confirmPassword" placeholder='Confirm password' />
                </div>
                <input type="submit" onClick={(event) => handleForm(event)} />
            </form>
            {error ? <p>{error}</p> : ''}
        </div>
    );
};

export default Register;