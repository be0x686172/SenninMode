import './style.scss';
import TextInput from '../../../ui/form/textInput/TextInput';
import SubmitInput from '../../../ui/form/submitInput/SubmitInput';
import { verifyConfirmPassword, verifyValidEmail, verifyValidPassword } from '../../../../utils/form/form';
import { useState } from 'react';
import PasswordChecklist from '../../form/passwordChecklist/PasswordChecklist';
import PasswordInput from '../../form/passwordInput/PasswordInput';

const AuthenticationSignUp = () => {

    const [error, setError] = useState("");
    const [passwordInputFocus, setPasswordInputFocus] = useState(false);
    const [passwordInputChange, setPasswordInputChange] = useState(null);

    function handleForm(event)
    {
        event.preventDefault();

        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;

        if (verifyValidEmail(email, setError) 
            && verifyValidPassword(password, setError) 
                && verifyConfirmPassword(password, confirmPassword, setError)) {
                    setError("");
        }
    }

    return (
        <form className='component c-authenticationSignUp'> 
            <TextInput label="Email address" type="email" name="email" placeholder="example@mail.com"/>
            <div>
                <PasswordInput setPasswordInputFocus={setPasswordInputFocus} setPasswordInputChange={setPasswordInputChange} />
                {passwordInputFocus ? <PasswordChecklist password={passwordInputChange} /> : ''}
            </div>
            <TextInput label="Confirm your password" type="password" name="confirmPassword" placeholder="********"/>
            <SubmitInput value="Sign Up" onClick={(event) => handleForm(event)} />
            <p className='error'>{error}</p>
        </form>
    );
};

export default AuthenticationSignUp;