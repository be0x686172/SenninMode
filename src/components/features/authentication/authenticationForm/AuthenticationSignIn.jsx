import './style.scss';
import TextInput from '../../../ui/form/textInput/TextInput';
import SubmitInput from '../../../ui/form/submitInput/SubmitInput';
import { useState } from 'react';
import { verifyValidEmail } from '../../../../utils/form/form';
import { signIn } from '../../../../services/supabase/supabaseAuthentication';

const AuthenticationSignIn = () => {

    const [error, setError] = useState("");

    async function handleForm(event)
    {
        event.preventDefault();

        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;
        
        if (verifyValidEmail(email, setError)) { 
            const data = await signIn(email, password, setError);
            if (data && data.user) {
                setError("");
                console.log("navigate from login to dashboard");
            }
        }
    }

    return (
        <form className='component c-authenticationSignIn'>
            <TextInput label="Email address" type="email" name="email" placeholder="example@mail.com"/>
            <TextInput label="Password" type="password" name="password" placeholder="********"/>
            <SubmitInput value="Sign In" onClick={(event) => handleForm(event)}/>
            <p>{error}</p>
        </form>
    );
};

export default AuthenticationSignIn;
