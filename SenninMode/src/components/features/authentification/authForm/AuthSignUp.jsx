import './style.scss';
import TextInput from '../../../ui/form/textInput/TextInput';
import SubmitInput from '../../../ui/form/submitInput/SubmitInput';

const AuthSignUp = () => {
    return (
        <form className='component c-authRegister'> 
            <TextInput label="Email address" type="email" name="email" placeholder="example@mail.com"/>
            <TextInput label="Password" type="password" name="password" placeholder="********"/>
            <TextInput label="Confirm password" type="password" name="password" placeholder="Confirm your password"/>
            <SubmitInput value="Sign Up"/>
        </form>
    );
};

export default AuthSignUp;